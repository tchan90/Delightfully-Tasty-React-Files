import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import Heading from "../Heading";
import LandingCard from "../cards/LandingCard";

const PopularPosts = ({ heading }) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		let mounted = true;
		setLoading(true);
		axios
			.all([
				axios.get(
					"https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/18"
				),
				axios.get(
					"https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/51"
				),
				axios.get(
					"https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/47"
				),
				axios.get(
					"https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/33"
				),
			])
			.then(
				axios.spread((post1, post2, post3, post4) => {
					if (mounted) {
						setPosts(new Array(post1.data, post2.data, post3.data, post4.data));
						setLoading(false);
					}
				})
			);
		return () => (mounted = false);
	}, []);

	if (!loading) {
		return (
			<Fragment>
				<Heading heading={heading} />
				<div className="featureContainer">
					{posts.map((post) => {
						const parser = new DOMParser();
						const html = parser.parseFromString(
							post.content.rendered,
							"text/html"
						);
						const img = html.querySelector("img");
						const url = img ? img.src : "";
						return (
							<Link to={`/post/${post.id}`} key={post.id}>
								<LandingCard
									title={post.title.rendered}
									image={url}
									date={post.date}
								/>
							</Link>
						);
					})}
				</div>
			</Fragment>
		);
	} else {
		return (
			<span className="d-flex justify-content-center">
				<Spinner animation="border" role="status" className=" mt-3">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</span>
		);
	}
};
export default PopularPosts;
