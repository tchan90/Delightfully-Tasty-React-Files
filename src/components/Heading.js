import React, { Fragment } from "react";

function Heading({ heading }) {
	return (
		<Fragment>
			<h2 className="header-main">
				<span>{heading}</span>
			</h2>
		</Fragment>
	);
}
export default Heading;
