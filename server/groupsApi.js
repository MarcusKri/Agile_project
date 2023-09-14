import express, { Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";

export function GroupsApi(mongoDatabase) {
	const router = new Router();

	dotenv.config();

	router.get("/", async (req, res) => {
		const groups = await mongoDatabase
			.collection("smidig")
			.find()
			.sort({ _id: -1 })
			.map(({ groupName, campus, course, workForm, anonymity, imageFile }) => ({
				groupName,
				campus,
				course,
				workForm,
				anonymity,
				imageFile,
			}))
			.limit(100)
			.toArray();
		res.json(groups);
	});

	router.post("/", async (req, res) => {
		const { groupName, campus, course, workForm, anonymity, imageFile } = req.body;
		const result = await mongoDatabase.collection("smidig").insertOne({
			groupName,
			campus,
			course,
			workForm,
			anonymity,
			imageFile,
		});
		console.log({ result });
		res.sendStatus(200);
	});

	router.get("/", async (req, res) => {
		let campus = req.query.campus;
		let course = req.query.course;
		let query = { campus: campus, course: course };

		const groups = await mongoDatabase
			.collection("smidig")
			.find(query)
			.sort({ _sort: -1 })
			.map(({ groupName, campus, course, imageFile }) => ({
				groupName,
				campus,
				course,
				imageFile,
			}))
			.limit(100)
			.toArray();
		res.json(groups);
	});

	return router;
}
