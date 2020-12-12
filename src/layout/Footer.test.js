import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
	test("render footer", () => {
		const { getByText, getByTestId } = render(<Footer />);
		expect(getByText(/Delightfully Tasty/i)).toBeInTheDocument();
		expect(getByTestId("footer")).toBeInTheDocument();
	});
	test("render icons", () => {
		const { getByTestId } = render(<Footer />);
		expect(getByTestId("icon-fb")).toBeInTheDocument();
		expect(getByTestId("icon-ins")).toBeInTheDocument();
		expect(getByTestId("icon-mail")).toBeInTheDocument();
	});
	test("get copyright text", () => {
		const { getByTestId } = render(<Footer />);
		expect(getByTestId("copyright text")).toBeInTheDocument();
	});
});
