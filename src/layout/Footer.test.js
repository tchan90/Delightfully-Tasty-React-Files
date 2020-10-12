import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("render footer", () => {
	const { getByText, getByTestId } = render(<Footer />);
	const blogName = getByText(/Delightfully Tasty/i);
	const footerID = getByTestId("footer");
	expect(blogName).toBeInTheDocument();
	expect(footerID).toBeInTheDocument();
});
test("render icons", () => {
	const { getByTestId } = render(<Footer />);
	const iconFb = getByTestId("icon-fb");
	const iconIns = getByTestId("icon-ins");
	const iconEmail = getByTestId("icon-mail");
	expect(iconFb).toBeInTheDocument();
	expect(iconIns).toBeInTheDocument();
	expect(iconEmail).toBeInTheDocument();
});
test("get copyright text", () => {
	const { getByTestId } = render(<Footer />);
	const copyright = getByTestId("copyright text");
	expect(copyright).toBeInTheDocument();
});
