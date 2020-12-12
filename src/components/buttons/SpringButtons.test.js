import React from "react";
import { render } from "@testing-library/react";
import { SpringDown, SpringUpHover } from "./SpringButtons";

it("Loads Author Section", () => {
	const { getByTestId } = render(<SpringDown children="Test Button" />);
	render(<SpringUpHover children="Test button" />);

	expect(getByTestId("springdown-button")).toBeInTheDocument();
	expect(getByTestId("springUpHover-button")).toBeInTheDocument();
});
