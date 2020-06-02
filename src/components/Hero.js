import React from "react";

function Hero({ heroImgLeft, heroImgMid, heroImgRight }) {
	return (
		<div className="hero-grid">
			<section style={{ backgroundImage: `url(${heroImgLeft})` }}></section>
			<section style={{ backgroundImage: `url(${heroImgMid})` }}></section>
			<section style={{ backgroundImage: `url(${heroImgRight})` }}></section>
			<h1 className="hero-text">DELIGHTFULLY TASTY FOOD ADVENTURES</h1>
		</div>
	);
}
export default Hero;
