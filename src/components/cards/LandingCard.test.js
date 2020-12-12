import React from "react";
import { render } from "@testing-library/react";
import LandingCard from "./LandingCard";

const dummyLandingCard = {
	cuisineTitle: "testCuisineTitle",
	title: "testPostTitle",
	image: "testPost",
	date: "1 January 2020",
};

it("Loads Author Section", () => {
	const { getByTestId } = render(<LandingCard {...dummyLandingCard} />);
	expect(getByTestId("landing-card")).toBeInTheDocument();
});
