import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className="text-center">
			<h4>No such page exists!</h4>
			<p>
				<Link to="/">Click here</Link> to go back home
			</p>
		</div>
	);
}
