import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";
import Config from "../../config/config.json";
import PropTypes from "prop-types";

import Heading from "../Heading";
import LandingCard from "../cards/LandingCard";

const PopularPosts = ({ heading }) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios
			.get(`${Config.mainUrl}posts?include=117,14,18,83`)
			.then((res) => {
				setPosts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
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
						// format date
						const parseDate = dayjs(post.date);
						const publishedDate = parseDate.format("DD MMM YYYY");
						return (
							<Link to={`/post/${post.id}/${post.slug}`} key={post.id}>
								<LandingCard
									title={post.title.rendered}
									image={post.featured_image_src || url}
									date={publishedDate}
								/>
							</Link>
						);
					})}
				</div>
			</Fragment>
		);
	} else {
		return (
			<div className="d-flex justify-content-center">
				<PulseLoader loading={loading} color="lightblue" size={13} />
			</div>
		);
	}
};
PopularPosts.propTypes = {
	heading: PropTypes.string.isRequired,
};
export default PopularPosts;
