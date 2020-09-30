import React from "react";
import { Link } from "react-router-dom";
import cuisines from "../../data/cuisineData";
import { InternationalBg } from "../../routes/LandingImages";
import SquareBtn from "../buttons/SquareBtn";

const InternationalBanner = () => {
	const international = cuisines.filter((obj) => {
		return obj.index === 43;
	});
	return (
		<>
			<div className="intBanner-wrapper">
				<div className="intBanner-grid">
					<section
						className="img-columns"
						style={{ backgroundImage: `url(${InternationalBg.corn})` }}
					/>
					<section
						className="img-columns"
						style={{ backgroundImage: `url(${InternationalBg.peas})` }}
					/>
					<section
						className="img-columns"
						style={{ backgroundImage: `url(${InternationalBg.pickleBread})` }}
					/>
					<div className="int-overlay">
						<div className="int-title">
							<h1>Eating my way around the world, one city at a time</h1>
							<Link
								to={`/category/${international[0].name}/${international[0].index}`}
							>
								<SquareBtn title="Delightfully Tasty's International Adventures" />
							</Link>
						</div>
					</div>
				</div>

				<div className="mobile-card">
					<div
						className="int-card-img"
						style={{ backgroundImage: `url(${InternationalBg.peas})` }}
					/>
					<div className="int-card-text">
						<h1>Eating my way around the world, one city at a time</h1>
						<Link
							to={`/category/${international[0].name}/${international[0].index}`}
						>
							<SquareBtn title="Delightfully Tasty's International Adventures" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default InternationalBanner;
