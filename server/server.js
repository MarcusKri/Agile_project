import express from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { WebSocketServer } from "ws";
import { fetchJSON } from "./fetchJSON.js";
import { MongoClient } from "mongodb";
import { GroupsApi } from "./groupsApi.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true })); // Make sure you add these two lines
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })); //Make sure you add these two lines
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

const wsServer = new WebSocketServer({ noServer: true });
const sockets = [];

wsServer.on("connect", (socket) => {
	sockets.push(socket);
	setTimeout(() => {
		socket.send(
			JSON.stringify({
				author: "Annonym hest",
				message: "Hei! Har dere gjort oppgave 9?",
			}),
		);
	}, 1000);
	setTimeout(() => {
		socket.send(
			JSON.stringify({
				author: "Annonym hest",
				message: "Okei den er god!",
			}),
		);
	}, 10000);
	socket.on("message", (data) => {
		const { author, message } = JSON.parse(data);
		for (const recipient of sockets) {
			recipient.send(JSON.stringify({ author, message }));
		}
	});
});

const discovery_endpoint = "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration";
const client_id = process.env.CLIENT_ID;
const scope = "openid";

app.get("/api/config", (req, res) => {
	res.json({
		response_type: "code",
		client_id,
		discovery_endpoint,
		scope: "openid profile",
		domain_hint: "egms.no",
	});
});

if (!client_id) {
	throw new Error("Must setup CLIENT_ID environment");
}

app.get("/api/config", (req, res) => {
	res.json({ discovery_endpoint, client_id, scope });
});

app.get("/api/login", async (req, res) => {
	const { access_token } = req.signedCookies;

	const { userinfo_endpoint } = await fetchJSON(discovery_endpoint);

	const userinfo = await fetch(userinfo_endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
	if (userinfo.status === 401) {
		return res.sendStatus(401);
	} else if (userinfo.ok) {
		res.json(await userinfo.json());
	} else {
		console.error(`Failed: ${userinfo.status} ${userinfo.statusText}`);
		return res.sendStatus(500);
	}
});

app.post("/api/login", (req, res) => {
	const { access_token } = req.body;
	res.cookie("access_token", access_token, { signed: true });
	res.sendStatus(200);
});

app.delete("/api/login", (req, res) => {
	res.clearCookie("access_token");
	console.log("server");
	res.sendStatus(200);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
	if (req.method === "GET" && !req.path.startsWith("/api")) {
		res.sendFile(path.resolve("../client/dist/index.html"));
	} else {
		next();
	}
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`http://localhost:${server.address().port}`);
	server.on("upgrade", (req, socket, head) => {
		wsServer.handleUpgrade(req, socket, head, (socket) => {
			wsServer.emit("connect", socket, req);
		});
	});
});

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
	console.log("connected to mongo db");
	app.use("/api/groups", GroupsApi(mongoClient.db("smidig")));
});

/*mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(()=> {
console.log("connected to mongo db");
	app.use("/api/groups", GroupsApi(mongoClient.db("smidig")));
})*/
