import React from "react";
import { Button } from "react-bootstrap";

const Load = ({ totalPages, nextPage, currentPage }) => {
	const x = totalPages;
	for (let i = currentPage; i <= x; i++) {
		return (
			<Button
				variant="primary"
				onClick={() => nextPage(i + 1)}
				className="ml-3"
			>
				Load More
			</Button>
		);
	}
};

const Previous = ({ totalPages, nextPage, currentPage }) => {
	const x = totalPages;
	for (let i = currentPage; i <= x; i++) {
		return (
			<Button variant="primary" onClick={() => nextPage(i - 1)}>
				Previous
			</Button>
		);
	}
};
export { Load, Previous };
