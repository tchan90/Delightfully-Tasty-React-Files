import React from "react";
import Moment from "react-moment";

function WordCard({ title, date }) {
	return (
		<div className="WordCard">
			<strong>{title}</strong>
			<div>
				<Moment format="D MMM YYYY" className="date-style">
					{date}
				</Moment>
			</div>
		</div>
	);
}
export default WordCard;
