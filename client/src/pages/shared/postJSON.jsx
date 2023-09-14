export async function postJSON(url, body) {
	const res = await fetch(url, {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		throw new Error(`${res.status}: ${res.statusText}`);
	}
}
