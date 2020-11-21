import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SquareCard = ({ landingV, imageURL, title }) => {
	return (
		<div
			className={classnames("catImg", landingV ? "catImg-land" : "catImg-cuis")}
			style={{
				backgroundImage: `url(${imageURL})`,
			}}
		>
			<div className="cat-overlay">
				<p className="catTitle">{title}</p>
			</div>
		</div>
	);
};
SquareCard.propTypes = {
	landingV: PropTypes.bool,
	imageURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
SquareCard.defaultProps = {
	landingV: false,
};
export default SquareCard;
