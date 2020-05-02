import React from "react";
import Moment from "react-moment";
import { Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoCard = ({ id, title, date, categories, excerpt, image, imageII }) => {
	return (
		<Card className="info-card-style">
			<Card.Img
				variant="top"
				src={
					image !==
					"https://www.delightfullytastymelb.com/wp-includes/images/media/default.png"
						? image
						: imageII
				}
			/>
			<Card.Body>
				<Moment format="D MMM YYYY" className="date-style">
					{date}
				</Moment>
				<Card.Title
					className="my-1"
					dangerouslySetInnerHTML={{ __html: title }}
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
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></Card.Text>
				) : null}

				<Link to={`/post/${id}`}>
					<Button variant="primary">
						<span className="button-style">View Post</span>
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};
export default InfoCard;
