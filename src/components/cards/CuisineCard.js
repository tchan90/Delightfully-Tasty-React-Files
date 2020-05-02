import React from "react";

const CuisineCard = ({ cuisineTitle, image }) => {
	return (
		<div
			className="cuisine-card"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="cuisine-card-overlay">
				<div className="cuisine-card-title">{cuisineTitle}</div>
			</div>
		</div>
	);
};
export default CuisineCard;
