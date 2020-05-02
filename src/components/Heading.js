import React, { Fragment } from "react";

function Heading({ heading }) {
	return (
		<Fragment>
			<p className=" header-main">
				<span>{heading}</span>
			</p>
		</Fragment>
	);
}
export default Heading;
