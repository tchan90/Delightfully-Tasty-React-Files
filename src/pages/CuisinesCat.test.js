import React from "react";
import { render } from "@testing-library/react";
import CuisinesCat from "./CuisinesCat";

describe.skip("Cuisine Category Page", () => {
	test("render page", () => {
		const { getByTestId } = render(<CuisinesCat />);
		expect(getByTestId("cuisine-category-container")).toBeInTheDocument();

		// Test local data passed through
	});
});
