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
		expect(getByTestId("Post-link")).toBeInTheDocument();
		expect(getByTestId("Cuisine-link")).toBeInTheDocument();
		expect(getByTestId("My Top 10-link")).toBeInTheDocument();
		expect(getByTestId("FAQ-link")).toBeInTheDocument();
		expect(getByTestId("About-link")).toBeInTheDocument();
	});
});
