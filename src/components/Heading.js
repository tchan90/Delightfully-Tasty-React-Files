import React, { Fragment } from "react";

function Heading({ heading }) {
	return (
		<Fragment>
			{heading && (
				<h2 data-testid="heading" className="header-main">
					<span>{heading}</span>
				</h2>
			)}
		</Fragment>
	);
}
export default Heading;
