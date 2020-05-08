import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../Heading";
import { SpringUpHover } from "../buttons/SpringButtons";

function Instagram({ heading, images }) {
	return (
		<div>
			<Heading heading={heading} />
			<a href="https://www.instagram.com/delightfullytasty/">
				<p className="instaLink" style={{ fontSize: "20px" }}>
					Follow Me!
				</p>
			</a>
			<Container>
				<Row>
					{images.map((image) => {
						return (
							<Col
								lg={4}
								md={6}
								sm={12}
								key={image.id}
								className="white-overlay"
							>
								<a href={image.link} target="_blank" rel="noopener noreferrer">
									<SpringUpHover>
										<img
											src={image.images.standard_resolution.url}
											className="center-img insta-img"
											alt={image.id}
										/>{" "}
									</SpringUpHover>
								</a>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}
export default Instagram;
