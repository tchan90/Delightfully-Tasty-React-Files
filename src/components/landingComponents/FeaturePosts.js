import React, { Fragment } from "react";
import LandingCard from "../cards/LandingCard";
import SquareBtn from "../buttons/SquareBtn";
import Heading from "../Heading";
import { Link } from "react-router-dom";

function FeaturePosts({ heading, recentPosts }) {
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
					return (
						<Link to={`/post/${post.id}`} key={post.id}>
							<LandingCard
								title={post.title.rendered}
								image={post.featured_image_src || url}
								date={post.date}
							/>
						</Link>
					);
				})}
			</div>
			<span className="viewmore-btn">
				<Link to="/browse">
					<SquareBtn title="View more posts" />{" "}
				</Link>
			</span>
		</Fragment>
	);
}
export default FeaturePosts;
