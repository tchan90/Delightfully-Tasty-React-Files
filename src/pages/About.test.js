import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import About from "./About";

afterEach(cleanup);

const mockAboutData = [
	{
		acf: [],
		author: 1,
		comment_status: "closed",
		content: {
			protected: false,
			rendered: "",
		},
		date: "2020-04-11T12:00:50",
		date_gmt: "2020-04-11T12:00:50",
		excerpt: {
			protected: false,
			rendered: "",
		},
		featured_media: 0,
		guid: {
			rendered: "",
		},
		id: 1,
		link: "",
		menu_order: 0,
		meta: [],
		modified: "2020-04-11T12:00:50",
		modified_gmt: "2020-04-11T12:00:50",
		parent: 0,
		ping_status: "closed",
		slug: "about",
		status: "publish",
		template: "",
		title: { rendered: "About-Test" },
		type: "page",
		yoast_head: "",
	},
];

it("Fetches and display data", async () => {
	axiosMock.get.mockResolvedValueOnce({ data: mockAboutData });

	const { getByTestId } = render(<About />);

	expect(getByTestId("loadingIcon")).toBeInTheDocument();

	const resolvedComponent = await waitForElement(() =>
		getByTestId("about-title")
	);
	expect(resolvedComponent).toHaveTextContent("About");
	await waitForElement(() => getByTestId("author-avatar"));
	await waitForElement(() => getByTestId("author-text"));
});
