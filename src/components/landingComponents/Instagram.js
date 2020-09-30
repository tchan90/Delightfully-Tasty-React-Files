import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../Heading";
import { SpringUpHover } from "../buttons/SpringButtons";
import PropTypes from "prop-types";

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
							<Col lg={4} md={6} sm={12} key={image.id}>
								<a
									href={image.permalink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<SpringUpHover>
										<img
											src={image.media_url}
											className="center-img insta-img"
											alt={image.id}
										/>
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
Instagram.propTypes = {
	heading: PropTypes.string.isRequired,
	images: PropTypes.array.isRequired,
};
export default Instagram;
