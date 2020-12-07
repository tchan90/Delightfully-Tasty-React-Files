import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import Browse from "./Browse";

afterEach(cleanup);

const mockBrowseData = [
	{
		author: 1,
		categories: [1],
		cats: [
			{
				cat_ID: 1,
				cat_name: "testCat",
			},
		],
		content: {
			protected: false,
			rendered: "<p>test content</p>",
		},
		date: "2020-04-11T12:00:50",
		date_gmt: "2020-04-11T12:00:50",
		excerpt: {
			protected: false,
			rendered: "test excerpt",
		},
		featured_image_src: "testimage.jpg",
		id: 1,
		nextPost: {
			id: 11,
			post_title: "test next post",
		},
		prevPost: "",
		slug: "test post",
		title: { rendered: "Test Post" },
	},
];

const mockHeaders = {
	"x-wp-totalpage": "28",
};

it.skip("Fetches and display data", async () => {
	axiosMock.get.mockResolvedValueOnce({
		data: mockBrowseData,
		headers: mockHeaders,
	});

	const { getByTestId } = render(<Browse />);

	expect(getByTestId("loadingIcon")).toBeInTheDocument();

	const resolvedComponent = await waitForElement(() =>
		getByTestId("browse-container")
	);
	// await waitForElement(() => getByTestId("author-avatar"));
	// await waitForElement(() => getByTestId("author-text"));
});
