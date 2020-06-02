import React from "react";
import WordCard from "../cards/WordCard";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RelatedPosts = ({ relatedPosts, scrollToTop }) => {
	if (relatedPosts) {
		return (
			<div className="m-4">
				<h3>Related posts</h3>
				<Row>
					{relatedPosts.map((post, i) => {
						return (
							<Col lg={4} sm={12} key={i}>
								<Link to={`/post/${post.ID}`} onClick={scrollToTop}>
									<WordCard title={post.post_title} date={post.post_date} />
								</Link>
							</Col>
						);
					})}
				</Row>
			</div>
		);
	} else {
		return null;
	}
};

export default RelatedPosts;
