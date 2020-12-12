import React from "react";
import { render } from "@testing-library/react";
import RelPostCard from "./RelPostCard";

const dummyRelPost = {
	title: "testPostTitle",
	image: "testPost",
	date: "1 January 2020",
};

it("Loads Author Section", () => {
	const { getByTestId } = render(<RelPostCard {...dummyRelPost} />);
	expect(getByTestId("related-post")).toBeInTheDocument();
});
