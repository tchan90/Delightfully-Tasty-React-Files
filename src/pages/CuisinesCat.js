import React from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import RHelmet from "../layout/RHelmet";
import SquareCard from "../components/cards/SquareCard";
import cuisines from "../data/cuisineData";
import ErrorMsg from "../components/error/ErrorMsg";

function CuisinesCat() {
	return (
		<>
			<RHelmet
				pageMeta={{
					title: "Cuisines",
					description: "Explore all the cuisine types on Delightfully Tasty.",
				}}
			/>
			<div className="category-bg">
				<Container
					className="my-2 animated fadeIn"
					style={{ paddingTop: "30px" }}
				>
					<motion.div
						className="row"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							type: "tween",
							stiffness: 100,
							damping: 10,
							duration: 0.2,
						}}
					>
						{cuisines ? (
							cuisines.map((cuisine) => {
								return (
									<Col
										xl={3}
										lg={4}
										md={6}
										sm={12}
										key={cuisine.index}
										className="mb-4"
									>
										<Link to={`/category/${cuisine.name}/${cuisine.index}`}>
											<SquareCard
												title={cuisine.name}
												imageURL={cuisine.image}
											/>
										</Link>
									</Col>
								);
							})
						) : (
							<ErrorMsg />
						)}
					</motion.div>
				</Container>
			</div>
		</>
	);
}
export default CuisinesCat;
