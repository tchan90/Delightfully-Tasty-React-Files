import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SpringDown = ({ children }) => {
	return (
		<>
			<motion.button whileTap={{ scale: 0.9 }} className="squareBtn">
				{children}
			</motion.button>
		</>
	);
};

const SpringUpHover = ({ children }) => {
	return (
		<>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.3 },
				}}
			>
				{children}
			</motion.div>
		</>
	);
};
SpringDown.propTypes = {
	children: PropTypes.node.isRequired,
};
SpringUpHover.propTypes = {
	children: PropTypes.node.isRequired,
};
export { SpringDown, SpringUpHover };
