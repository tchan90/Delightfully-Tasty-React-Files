import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import About from "./About";

afterEach(cleanup);

const mockAboutData = [
	{
		author: 1,
		content: {
			protected: false,
			rendered: "",
		},
		id: 1,
		title: { rendered: "About Test Page" },
	},
];

it("Fetches and display data", async () => {
	axiosMock.get.mockResolvedValueOnce({ data: mockAboutData });

	const { getByTestId } = render(<About />);

	expect(getByTestId("loadingIcon")).toBeInTheDocument();

	const resolvedComponent = await waitForElement(() =>
		getByTestId("about-title")
	);
	expect(resolvedComponent).toHaveTextContent("About Test Page");
	await waitForElement(() => getByTestId("author-avatar"));
	await waitForElement(() => getByTestId("author-text"));
});
