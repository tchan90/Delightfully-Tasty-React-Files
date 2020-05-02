import React from "react";
import Moment from "react-moment";
import { Card } from "react-bootstrap";
import classNames from "classnames";

function LandingCards({ cuisineTitle, title, image, date }) {
	return (
		<Card className="landingCard">
			<Card.Img variant="top" src={image} className="landing-image" />
			<Card.Body>
				{date ? (
					<Card.Subtitle className="mb-2 text-muted">
						<Moment format="D MMM YYYY" className="date-style">
							{date}
						</Moment>
					</Card.Subtitle>
				) : null}
				<Card.Title
					dangerouslySetInnerHTML={{ __html: title || cuisineTitle }}
					className={classNames(cuisineTitle ? "text-center" : "text-left")}
				></Card.Title>
			</Card.Body>
		</Card>
	);
}
export default LandingCards;
