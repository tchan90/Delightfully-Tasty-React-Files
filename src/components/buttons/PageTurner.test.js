import React from "react";
import { render } from "@testing-library/react";
import PageTurner from "./PageTurner";

const dummyPageTurner = {
	title: "testPostTitle",
	name: "testPost",
	ariaLabelledby: "nextTestPost",
};

it("Loads Author Section", () => {
	const { getByTestId } = render(<PageTurner {...dummyPageTurner} />);
	expect(getByTestId("page-turner")).toBeInTheDocument();
});
