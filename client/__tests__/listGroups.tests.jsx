import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { ListGroups } from "../src/pages/groupPages/listGroups";
import { GroupsApiContext } from "../src/pages/groupPages/groupsApiContext";

describe("List Groups component", () => {
	it("shows loading screen", () => {
		const domElement = document.createElement("div");
		ReactDOM.render(<ListGroups />, domElement);
		expect(domElement.innerHTML).toMatchSnapshot();
	});

	it("shows groups", async () => {
		const groups = [{ groupName: "domba" }, { groupName: "kalkutta" }];
		const domElement = document.createElement("div");
		await act(async () => {
			ReactDOM.render(
				<GroupsApiContext.Provider value={{ listGroups: () => groups }}>
					<ListGroups />
				</GroupsApiContext.Provider>,
				domElement,
			);
		});
		expect(Array.from(domElement.querySelectorAll("h3")).map((e) => e.innerHTML)).toEqual([
			"<b>Navn:</b> domba ",
			"<b>Navn:</b> kalkutta ",
		]);
		expect(domElement.innerHTML).toMatchSnapshot();
	});

	it("shows error message", async () => {
		const domElement = document.createElement("div");
		await act(async () => {
			const listGroups = () => {
				throw new Error("Something went wrong");
			};
			ReactDOM.render(
				<GroupsApiContext.Provider value={{ listGroups }}>
					<ListGroups />
				</GroupsApiContext.Provider>,
				domElement,
			);
		});
		expect(domElement.querySelector("#error-text").innerHTML).toEqual("Error: Something went wrong");
		expect(domElement.innerHTML).toMatchSnapshot();
	});
});
