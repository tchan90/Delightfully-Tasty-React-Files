import React from "react";
import { render } from "@testing-library/react";
import Instagram from "./Instagram";

const dummyInstagram = {
	heading: "testHeading",
	images: [
		{
			id: "1",
			media_url: "testInstaImage.jpg",
			permalink: "testlink",
		},
	],
};

it("Loads Author Section", () => {
	const { getByTestId } = render(<Instagram {...dummyInstagram} />);

	expect(getByTestId("instagram-images")).toBeInTheDocument();
	expect(getByTestId("heading")).toBeInTheDocument();
});
