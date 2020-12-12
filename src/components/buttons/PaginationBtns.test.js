import React from "react";
import { render } from "@testing-library/react";
import { Load, Previous } from "./PaginationBtns";

const dummyPagesData = {
	totalPages: "20",
	nextPage: jest.fn(),
	currentPage: 1,
};

it("Loads Author Section", () => {
	const { getByTestId } = render(<Load {...dummyPagesData} />);
	render(<Previous {...dummyPagesData} />);

	expect(getByTestId("next-button")).toBeInTheDocument();
	expect(getByTestId("previous-button")).toBeInTheDocument();
});
