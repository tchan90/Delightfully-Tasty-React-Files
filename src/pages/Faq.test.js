import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "axios";
import Faq from "./Faq";

afterEach(cleanup);

const mockFaqData = [
	{
		author: 1,
		content: {
			protected: false,
			rendered: "",
		},
		id: 1,
		title: { rendered: "FAQ Test Page" },
	},
];

it("Fetches and display data", async () => {
	axiosMock.get.mockResolvedValueOnce({ data: mockFaqData });

	const { getByTestId } = render(<Faq />);

	expect(getByTestId("loadingIcon")).toBeInTheDocument();

	const resolvedComponent = await waitForElement(() =>
		getByTestId("faq-title")
	);
	expect(resolvedComponent).toHaveTextContent("FAQ Test Page");
});
