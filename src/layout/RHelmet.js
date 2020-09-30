import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const RHelmet = ({ pageMeta }) => {
	const title = pageMeta.title;
	const Ctitle = title.charAt(0).toUpperCase() + title.slice(1);

	return (
		<Helmet>
			<title>{Ctitle} - Delightfully Tasty</title>
			{pageMeta.description && (
				<meta name="description" content={pageMeta.description} />
			)}
		</Helmet>
	);
};
RHelmet.propTypes = {
	pageMeta: PropTypes.object.isRequired,
};
export default RHelmet;
