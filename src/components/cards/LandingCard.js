import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import classNames from "classnames";
import PropTypes from "prop-types";

function LandingCards({ cuisineTitle, title, image, date }) {
	return (
		<motion.div whileTap={{ scale: 0.9 }}>
			<Card className="landingCard">
				<Card.Img
					variant="top"
					src={image}
					className="landing-image"
					alt={title}
				/>
				<Card.Body>
					{date ? (
						<Card.Subtitle className="mb-2 text-muted">
							<p
								style={{ marginBottom: "0px" }}
								aria-labelledby="publishedDate"
							>
								{date}
							</p>
						</Card.Subtitle>
					) : null}
					<Card.Title
						dangerouslySetInnerHTML={{ __html: title || cuisineTitle }}
						className={classNames(cuisineTitle ? "text-center" : "text-left")}
						aria-labelledby="postTitle"
					></Card.Title>
				</Card.Body>
			</Card>
		</motion.div>
	);
}
LandingCards.propTypes = {
	cuisineTitle: PropTypes.string,
	date: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	title: PropTypes.string,
};
LandingCards.defaultProps = {
	cuisineTitle: "",
	title: "",
};
export default LandingCards;
