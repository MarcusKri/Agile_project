import ReactDOM from "react-dom";
import React from "react";
import { CreateGroup } from "../src/pages/groupPages/createGroup/createGroup";
import { MemoryRouter } from "react-router-dom";

describe("add groups to database", () => {
	it("shows groups form ", () => {
		const element = document.createElement("div");
		ReactDOM.render(
			<MemoryRouter>
				<CreateGroup />
			</MemoryRouter>,
			element,
		);
		expect(element.innerHTML).toMatchInlineSnapshot();
		expect(Array.from(element.querySelectorAll("form label strong")).map((e) => e.innerHTML)).toEqual([]);
	});
});
