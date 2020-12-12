import React from "react";

const Hero = ({ heroImgLeft, heroImgMid, heroImgRight }) => {
	if (heroImgLeft && heroImgMid && heroImgRight) {
		return (
			<div className="hero-grid" data-testid="heroImg">
				<section style={{ backgroundImage: `url(${heroImgLeft})` }}></section>
				<section style={{ backgroundImage: `url(${heroImgMid})` }}></section>
				<section style={{ backgroundImage: `url(${heroImgRight})` }}></section>
				<h1 className="hero-text">DELIGHTFULLY TASTY FOOD ADVENTURES</h1>
			</div>
		);
	}
	return null;
};
export default Hero;
