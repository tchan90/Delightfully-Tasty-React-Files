import React from "react";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Navigation", () => {
	test("render navigation", () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		);
		expect(getByTestId("navigation")).toBeInTheDocument();
		expect(getByTestId("logo")).toBeInTheDocument();
	});
});
