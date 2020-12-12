import React from "react";
import { render } from "@testing-library/react";
import Heading from "./Heading";

const dummyHeading = "testHeading";

it("Loads Heading", () => {
	const { getByTestId } = render(<Heading heading={dummyHeading} />);

	expect(getByTestId("heading")).toBeInTheDocument();
});
it("Doesn't Heading", () => {
	const { queryByTestId } = render(<Heading />);

	expect(queryByTestId("heading")).not.toBeInTheDocument();
});
