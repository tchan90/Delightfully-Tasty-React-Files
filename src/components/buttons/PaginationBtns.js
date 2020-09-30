import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Load = ({ totalPages, nextPage, currentPage }) => {
	const x = totalPages;
	for (let i = currentPage; i <= x; i++) {
		return (
			<Button
				className="mx-1"
				variant="primary"
				onClick={() => nextPage(i + 1)}
			>
				Next
			</Button>
		);
	}
};

const Previous = ({ totalPages, nextPage, currentPage }) => {
	const x = totalPages;
	for (let i = currentPage; i <= x; i++) {
		return (
			<Button
				className="mx-1"
				variant="primary"
				onClick={() => nextPage(i - 1)}
			>
				Previous
			</Button>
		);
	}
};
Load.propTypes = {
	currentPage: PropTypes.number.isRequired,
	nextPage: PropTypes.func.isRequired,
	totalPages: PropTypes.string.isRequired,
};
Previous.propTypes = {
	currentPage: PropTypes.number.isRequired,
	nextPage: PropTypes.func.isRequired,
	totalPages: PropTypes.string.isRequired,
};
export { Load, Previous };
