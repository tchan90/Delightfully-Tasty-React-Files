import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ErrorPage = ({ backToBrowse }) => {
	return (
		<div className="text-center">
			<h4>Oops, this page doesn't exist!</h4>
			<div className="vector-wrapper">
				<img
					src="https://www.delightfullytastymelb.com/wp-content/uploads/2020/07/pixeltrue-error-1.png"
					alt="no post"
					className="vector-icons"
				/>
			</div>
			<p style={{ fontSize: "12px" }}>
				Illustration by{" "}
				<a
					href="https://icons8.com/illustrations/style--pixeltrue"
					target="_blank"
					rel="noopener noreferrer"
				>
					Pixeltrue
				</a>{" "}
				from <a href="https://icons8.com/">Icons8</a>
			</p>
			{!backToBrowse ? (
				<p>
					<Link to="/">Click here </Link> to go home
				</p>
			) : (
				<p>
					<Link to="/browse">Click here </Link> to go back browsing
				</p>
			)}
		</div>
	);
};
ErrorPage.propTypes = {
	backToBrowse: PropTypes.bool,
};
ErrorPage.defaultProps = {
	backToBrowse: false,
};
export default ErrorPage;
