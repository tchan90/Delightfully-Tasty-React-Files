import React from "react";
import { render, queryAllByTestId } from "@testing-library/react";
import Hero from "./Hero";

const dummyImages = {
	heroImgLeft: "test1.jpg",
	heroImgMid: "test2.jpg",
	heroImgRight: "test3.jpg",
};

it("Loads hero image", () => {
	const { getByTestId } = render(<Hero {...dummyImages} />);

	expect(getByTestId("heroImg")).toBeInTheDocument();
});
it("Doesn't load hero image", () => {
	const { queryByTestId } = render(<Hero />);

	expect(queryByTestId("heroImg")).not.toBeInTheDocument();
});
