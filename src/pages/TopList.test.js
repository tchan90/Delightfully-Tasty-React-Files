import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import TopList from "./TopList";

afterEach(cleanup);

const mockTopListData = [
	{
		author: 1,
		content: {
			protected: false,
			rendered: "",
		},
		id: 1,
		title: { rendered: "Top List Test Page" },
	},
];

it("Fetches and display data", async () => {
	axiosMock.get.mockResolvedValueOnce({ data: mockTopListData });

	const { getByTestId } = render(<TopList />);

	expect(getByTestId("loadingIcon")).toBeInTheDocument();

	const resolvedComponent = await waitForElement(() =>
		getByTestId("toplist-title")
	);
	expect(resolvedComponent).toHaveTextContent("Top List Test Page");
});
