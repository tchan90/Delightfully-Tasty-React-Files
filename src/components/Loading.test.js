import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

it("Loads loading icon", () => {
	const { getByTestId } = render(<Loading loading={true} />);

	expect(getByTestId("loadingIcon")).toBeInTheDocument();
});
it("Doesn't load loading icon", () => {
	const { queryByTestId } = render(<Loading loading={false} />);

	expect(queryByTestId("loadingIcon")).not.toBeInTheDocument();
});
