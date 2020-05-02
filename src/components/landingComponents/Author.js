import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import SquareBtn from "../buttons/SquareBtn";

const AboutCard = ({ heading, image }) => {
	return (
		<div>
			<Heading heading={heading} />
			<Container>
				<Row>
					<Col sm={12}>
						<div className="d-flex justify-content-center mt-4">
							<img src={image} className="authorAvatar" alt="author" />
						</div>
						<div className="d-flex justify-content-center mt-4">
							<Link to="/about">
								{" "}
								<SquareBtn title="Read about me!" />
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default AboutCard;
