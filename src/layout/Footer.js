import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="container-fluid footer">
			<div className="section-1 pl-4 pt-4">
				<div className="logo logo-footer">
					<p>Delightfully Tasty</p>
				</div>
			</div>
			<div className="section-3">
				<ul className="d-flex justify-content-around">
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/browse">
						<li>All Posts</li>
					</Link>
					<Link to="/cuisines-category">
						<li>Categories</li>
					</Link>
				</ul>
			</div>
			<div className="section-2">
				<ul className="d-flex justify-content-center">
					<li className="copyright ">&copy; 2020 Delightfully Tasty</li>
					<li className="copyright text-dark"> | Theme by Tammy Chan</li>
				</ul>
			</div>
		</div>
	);
}
export default Footer;
