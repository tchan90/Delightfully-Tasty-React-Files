import React from "react";
import PropTypes from "prop-types";

function PageTurner({ title, name, ariaLabelledby }) {
	return (
		<div
			data-testid="page-turner"
			className="mx-3 mt-2"
			aria-labelledby={ariaLabelledby}
		>
			<span style={{ color: "grey" }}>{title}</span>
			<p>{name}</p>
		</div>
	);
}
PageTurner.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default PageTurner;
