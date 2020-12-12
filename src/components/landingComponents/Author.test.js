import React from "react";
import { render } from "@testing-library/react";
import Author from "./Author";
import { BrowserRouter } from "react-router-dom";

const dummyAbout = {
	heading: "testHeading",
	image: "testImg.jpg",
};

it("Loads Author Section", () => {
	const { getByTestId } = render(
		<BrowserRouter>
			<Author {...dummyAbout} />
		</BrowserRouter>
	);

	expect(getByTestId("author-avatar")).toBeInTheDocument();
	expect(getByTestId("heading")).toBeInTheDocument();
});
