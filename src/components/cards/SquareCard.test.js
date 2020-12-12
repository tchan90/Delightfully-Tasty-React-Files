import React from "react";
import { render } from "@testing-library/react";
import SquareCard from "./SquareCard";

const dummySquareCard = {
	title: "testPostTitle",
	imageURL: "testPost.jpg",
	landingV: false,
};

it("Loads Author Section", () => {
	const { getByTestId } = render(<SquareCard {...dummySquareCard} />);
	expect(getByTestId("square-card")).toBeInTheDocument();
});
