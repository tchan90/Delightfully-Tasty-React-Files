import React from "react";
import { Link } from "react-router-dom";
import CuisineData from "../../data/cuisineData";

const InternationalBanner = ({ interImg }) => {
	const cuisines = CuisineData.cuisines;
	const international = cuisines.filter((obj) => {
		return obj.index === 43;
	});
	return (
		<>
			<Link to={`/category/${international[0].name}/${international[0].index}`}>
				<div
					className="parallax"
					style={{ backgroundImage: `url(${interImg})` }}
				>
					<div className="parallax-overlay intern-text">
						<span>
							<h1>Eating my way around the world, one city at a time</h1>
							<p>Delightfully Tasty's International Adventures</p>
						</span>
					</div>
				</div>
			</Link>
		</>
	);
};
export default InternationalBanner;
