import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("render footer", () => {
	const { getByText } = render(<Footer />);
	const blogName = getByText(/Delightfully Tasty/i);
	expect(blogName).toBeInTheDocument();
});
