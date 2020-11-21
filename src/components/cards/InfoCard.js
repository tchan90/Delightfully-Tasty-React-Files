import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Sanitizer from "../../hooks/Sanitizer";

const InfoCard = ({
	id,
	title,
	slug,
	date,
	categories,
	excerpt,
	image,
	imageII,
}) => (
	<Card className="info-card-style">
		<Link to={`/post/${id}/${slug}`} className="info-card-overlay">
			<Card.Img
				variant="top"
				src={
					image !==
					"https://www.delightfullytastymelb.com/wp-includes/images/media/default.png"
						? image
						: imageII
				}
				className="info-card-img"
				alt={title}
			/>
		</Link>
		<Card.Body>
			<span className="date-style">{date}</span>
			<Card.Title
				className="my-1"
				dangerouslySetInnerHTML={{ __html: Sanitizer(title) }}
			></Card.Title>
			<hr />
			<div className="info-card-tags">
				<Row>
					{categories.map((cat, i) => {
						return (
							<Link
								to={`/category/${cat.name}/${cat.cat_ID}`}
								key={cat.cat_ID}
								className="my-2"
							>
								<span key={i} className="tagStyle">
									{cat.name}
								</span>
							</Link>
						);
					})}
				</Row>
			</div>
			{excerpt ? (
				<Card.Text
					className="excerpt-style"
					dangerouslySetInnerHTML={{ __html: Sanitizer(excerpt) }}
				></Card.Text>
			) : null}

			<Link to={`/post/${id}/${slug}`}>
				<Button variant="primary">
					<span className="button-style">View Post</span>
				</Button>
			</Link>
		</Card.Body>
	</Card>
);
InfoCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	categories: PropTypes.arrayOf(PropTypes.any).isRequired,
	excerpt: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	imageII: PropTypes.string,
};
InfoCard.defaultProps = {
	imageII: "",
};
export default InfoCard;
