import React from "react";
import { SpringDown } from "./SpringButtons";

function SquareBtn({ title }) {
	return (
		<SpringDown>
			<button className="squareBtn">{title}</button>
		</SpringDown>
	);
}
export default SquareBtn;
