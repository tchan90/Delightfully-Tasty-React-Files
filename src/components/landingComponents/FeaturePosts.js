import React, { Fragment } from "react";
import dayjs from "dayjs";
import LandingCard from "../cards/LandingCard";
import SquareBtn from "../buttons/SquareBtn";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturePosts = ({ heading, recentPosts }) => {
	return (
		<Fragment>
			<Heading heading={heading} />
			<div className="featureContainer">
				{recentPosts.map((post) => {
					//get first image if no featured img
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
			<span className="viewmore-btn mt-3">
				<Link to="/browse">
					<SquareBtn title="View more posts" />
				</Link>
			</span>
		</Fragment>
	);
};
FeaturePosts.propTypes = {
	heading: PropTypes.string.isRequired,
	recentPosts: PropTypes.array.isRequired,
};
export default FeaturePosts;
