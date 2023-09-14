import React, { useContext, useEffect, useState } from "react";
import { fetchJSON } from "../helpers/fetchJSON";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "/src/contexts/login.context.jsx";

export function randomString(length) {
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz1234567890";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return result;
}

export async function sha256(string) {
	const binaryHash = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(string));
	return btoa(String.fromCharCode.apply(null, new Uint8Array(binaryHash)))
		.split("=")[0]
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
}

export function Login() {
	const { discovery_endpoint, client_id, scope } = useContext(LoginContext);
	useEffect(async () => {
		const { authorization_endpoint } = await fetchJSON(discovery_endpoint);

		const state = randomString(50);
		window.sessionStorage.setItem("authorization_state", state);
		const code_verifier = randomString(50);
		window.sessionStorage.setItem("code_verifier", code_verifier);

		const parameters = {
			response_type: "code",
			response_mode: "fragment",
			state,
			client_id,
			scope,
			code_challenge: await sha256(code_verifier),
			code_challenge_method: "S256",
			redirect_uri: window.location.origin + "/login/callback",
			domain_hint: "egms.no",
		};

		window.location.href = authorization_endpoint + "?" + new URLSearchParams(parameters);
	}, []);

	return (
		<div>
			<h1>Vennligst vent...</h1>
		</div>
	);
}

export function LoginCallback() {
	const navigate = useNavigate();
	const [error, setError] = useState();
	const { discovery_endpoint, client_id } = useContext(LoginContext);
	useEffect(async () => {
		const { state, code, access_token, error, error_description } = Object.fromEntries(
			new URLSearchParams(window.location.hash.substring(1)),
		);
		const expectedState = window.sessionStorage.getItem("authorization_state");
		if (state !== expectedState) {
			setError("Invalid callback - state mismatch");
		} else if (error || error_description) {
			setError(error_description || error);
		} else if (code) {
			const grant_type = "authorization_code";
			const code_verifier = window.sessionStorage.getItem("code_verifier");
			const redirect_uri = window.location.origin + "/login/callback";
			const { token_endpoint } = await fetchJSON(discovery_endpoint);
			const parameters = {
				client_id,
				grant_type,
				code,
				code_verifier,
				redirect_uri,
			};
			const tokenRes = await fetch(token_endpoint, {
				method: "post",
				body: new URLSearchParams(parameters),
			});
			if (!tokenRes.ok) {
				setError(`Failed to fetch token: ${tokenRes.status} ${tokenRes.statusText}`);
				console.log(await tokenRes.json());
			} else {
				setError(`Okay -- lets try to get the token from ${token_endpoint}!`);
				const { access_token } = await tokenRes.json();
				const res = await fetch("/api/login", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify({ access_token }),
				});
				if (res.ok) {
					console.log("Loggggggggg1");
					navigate("/mypage");
				} else {
					setError(`Failed ${res.status} ${res.statusText}`);
				}
			}
		} else if (access_token) {
			console.log("Logg2");
			const res = await fetch("/api/login", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ access_token }),
			});
			if (res.ok) {
				navigate("/");
			} else {
				setError(`Failed ${res.status} ${res.statusText}`);
			}
		} else {
			setError("Missing access_token");
		}
	}, []);

	return (
		<div>
			<h1>Vennligst vent...</h1>
		</div>
	);
}
