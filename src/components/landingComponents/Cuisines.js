import React, { Fragment } from "react";
import Heading from "../Heading";
import SquareCard from "../cards/SquareCard";
import SquareBtn from "../buttons/SquareBtn";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Cuisines({ heading, cuisines }) {
	//pick cuisines you want to show
	const index = ["4", "12", "44", "59"];
	const object = {};
	cuisines.forEach((d) => {
		object[d.index] = d;
	});
	const result = index.map((d) => {
		return object[d];
	});

	const scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	return (
		<Fragment>
			<Heading heading={heading} />
			<div className="featureContainer">
				{result.map((cuisine) => {
					return (
						<Link
							to={`/category/${cuisine.name}/${cuisine.index}`}
							onClick={scrollToTop}
							key={cuisine.index}
						>
							<SquareCard
								title={cuisine.name}
								imageURL={cuisine.image}
								key={cuisine.index}
								landingV
							></SquareCard>
						</Link>
					);
				})}
			</div>
			<span className="viewmore-btn mt-3">
				<Link to="/cuisines" onClick={scrollToTop}>
					<SquareBtn title="View more cuisines" />
				</Link>
			</span>
		</Fragment>
	);
}
Cuisines.propTypes = {
	cuisines: PropTypes.array.isRequired,
	heading: PropTypes.string.isRequired,
};
export default Cuisines;
