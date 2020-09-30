import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import Config from "../../config/config.json";
import PulseLoader from "react-spinners/PulseLoader";
import { Row, Col } from "react-bootstrap";
import RelPostCard from "../cards/RelPostCard";

const RelatedPosts = ({ categories, currentID, scrollToTop }) => {
	const [relPosts, setRelPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`${Config.mainUrl}posts?per_page=3&categories=${categories}&exclude=${currentID}`
			)
			.then((res) => {
				setRelPosts(res.data);
				setLoading(false);
			});
	}, [currentID, categories]);

	if (loading) {
		return (
			<div className="d-flex justify-content-center">
				<PulseLoader loading={loading} color="lightblue" size={13} />
			</div>
		);
	}
	if (!loading && relPosts && relPosts.length) {
		return (
			<div className="m-4">
				<h3>Related Posts</h3>
				<Row>
					{relPosts.map((post) => {
						// format date
						const parseDate = dayjs(post.date);
						const publishedDate = parseDate.format("DD MMM YYYY");
						return (
							<Col lg={4} sm={12} key={post.id}>
								<Link
									to={`/post/${post.id}/${post.slug}`}
									onClick={scrollToTop}
								>
									<RelPostCard
										title={post.title.rendered}
										date={publishedDate}
										image={post.featured_image_src}
									/>
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
