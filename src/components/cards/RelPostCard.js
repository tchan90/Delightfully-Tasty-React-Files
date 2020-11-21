import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Sanitizer from "../../hooks/Sanitizer";
import RelPostBg from "../../svg/relPostBg.svg";

const WordCard = ({ title, date, image }) => {
	const defaultUrlImage =
		"https://www.delightfullytastymelb.com/wp-includes/images/media/default.png";
	const defaultCard = image === defaultUrlImage;
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.1 },
			}}
			whileTap={{ scale: 0.9 }}
			className="relatedPostCard"
			style={{
				backgroundImage: defaultCard ? `url(${RelPostBg})` : `url(${image})`,
			}}
		>
			<div
				className={classnames(
					defaultCard ? "" : "relPost-overlay-stripe",
					"relPost-overlay"
				)}
			>
				<p className="relPost-text">
					<strong dangerouslySetInnerHTML={{ __html: Sanitizer(title) }} />
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
