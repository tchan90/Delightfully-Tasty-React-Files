import React, { useState } from "react";
import SquareCard from "../components/cards/SquareCard";
import { Container, Row, Col } from "react-bootstrap";
import CuisineData from "../data/cuisineData";
import { Link } from "react-router-dom";
import ErrorMsg from "../components/error/ErrorMsg";

function CuisinesCat() {
	const [cuisines, setCuisines] = useState([CuisineData]);
	const cuisinesTypes = cuisines[0].cuisines;

	return (
		<div className="category-bg">
			<Container
				className="my-2 animated fadeIn"
				style={{ paddingTop: "30px" }}
			>
				<Row>
					{cuisines ? (
						cuisinesTypes.map((cuisine) => {
							return (
								<Col lg={3} md={6} sm={12} key={cuisine.index} className="mb-4">
									<Link to={`/category/${cuisine.name}/${cuisine.index}`}>
										<SquareCard title={cuisine.name} imageURL={cuisine.image} />{" "}
									</Link>
								</Col>
							);
						})
					) : (
						<ErrorMsg />
					)}
				</Row>
			</Container>
		</div>
	);
}
export default CuisinesCat;
