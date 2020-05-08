import React, { Fragment } from "react";
import Heading from "../Heading";
import CuisineCard from "../cards/CuisineCard";
import SquareBtn from "../buttons/SquareBtn";
import { Link } from "react-router-dom";

function Cuisines({ heading, cuisines }) {
	//pick cuisines you want to show
	const obj1 = cuisines[0].cuisines[1];
	const obj2 = cuisines[0].cuisines[5];
	const obj3 = cuisines[0].cuisines[4];
	const obj4 = cuisines[0].cuisines[9];

	const cuisineArray = [];
	cuisineArray.push(obj1, obj2, obj3, obj4);

	const scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	return (
		<Fragment>
			<Heading heading={heading} />
			<div className="featureContainer">
				{cuisineArray.map((cuisine) => {
					return (
						<Link
							to={`/category/${cuisine.name}/${cuisine.index}`}
							onClick={scrollToTop}
							key={cuisine.index}
						>
							<CuisineCard
								cuisineTitle={cuisine.name}
								image={cuisine.image}
								key={cuisine.index}
							></CuisineCard>
						</Link>
					);
				})}
			</div>
			<span className="viewmore-btn">
				<Link to="/cuisines-category" onClick={scrollToTop}>
					<SquareBtn title="View more cuisines" />{" "}
				</Link>
			</span>
		</Fragment>
	);
}
export default Cuisines;
