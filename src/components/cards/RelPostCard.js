import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const WordCard = ({ title, date, image }) => {
	const defaultUrlImage =
		"https://www.delightfullytastymelb.com/wp-includes/images/media/default.png";
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.1 },
			}}
			whileTap={{ scale: 0.9 }}
			className="relatedPostCard"
			style={{
				backgroundImage: image === defaultUrlImage ? "none" : `url(${image})`,
			}}
		>
			<div
				className={classnames(
					image === defaultUrlImage
						? "relPost-default-overlay"
						: "relPost-overlay"
				)}
			>
				<p className="relPost-text" aria-labelledby="relatedPosts">
					<strong dangerouslySetInnerHTML={{ __html: title }} />
					<br />
					<span className="relPost-time">{date}</span>
				</p>
			</div>
		</motion.div>
	);
};
WordCard.propTypes = {
	date: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	title: PropTypes.string,
};
export default WordCard;
