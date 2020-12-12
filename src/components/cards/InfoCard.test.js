import React from "react";
import { render } from "@testing-library/react";
import InfoCard from "./InfoCard";
import { BrowserRouter } from "react-router-dom";

const dummyInfoCard = {
	id: 1,
	title: "testPostTitle",
	slug: "testPost",
	date: "1 January 2020",
	categories: [
		{
			cat_ID: 1,
			cat_name: "testCat",
		},
	],
	excerpt: "test excerpt",
	image: "testImage.jpg",
	imageII: "testImageII.jpg",
};

it("Loads Info Card", () => {
	const { getByTestId } = render(
		<BrowserRouter>
			<InfoCard {...dummyInfoCard} />
		</BrowserRouter>
	);
	expect(getByTestId("info-card")).toBeInTheDocument();
});
