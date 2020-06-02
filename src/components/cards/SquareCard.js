import React from "react";

function squareCard({ imageURL, title }) {
	return (
		<div
			className="catImg"
			style={{
				backgroundImage: `url(${imageURL})`,
			}}
		>
			<div className="cat-overlay">
				<p className="catTitle">{title}</p>
			</div>
		</div>
	);
}
export default squareCard;
