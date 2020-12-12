import React from "react";
import { render } from "@testing-library/react";
import Cuisines from "./Cuisines";
import { BrowserRouter } from "react-router-dom";

const dummyCuisines = {
	heading: "testHeading",
	cuisines: [
		{
			index: 4,
			name: "TestCuisine",
			image: "testCuisineImg.jpq",
		},
		{
			index: 12,
			name: "TestCuisine",
			image: "testCuisineImg.jpq",
		},
		{
			index: 44,
			name: "TestCuisine",
			image: "testCuisineImg.jpq",
		},
		{
			index: 59,
			name: "TestCuisine",
			image: "testCuisineImg.jpq",
		},
	],
};

it("it loads cuisine section", () => {
	const { getByTestId } = render(
		<BrowserRouter>
			<Cuisines {...dummyCuisines} />
		</BrowserRouter>
	);

	expect(getByTestId("heading")).toBeInTheDocument();
	expect(getByTestId("top-cuisines")).toBeInTheDocument();
});
