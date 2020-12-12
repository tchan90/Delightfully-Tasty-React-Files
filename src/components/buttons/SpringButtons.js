import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SpringDown = ({ children }) => (
	<>
		{children && (
			<motion.button
				data-testid="springdown-button"
				whileTap={{ scale: 0.9 }}
				className="squareBtn"
			>
				{children}
			</motion.button>
		)}
	</>
);

const SpringUpHover = ({ children }) => (
	<>
		{children && (
			<motion.div
				data-testid="springUpHover-button"
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.3 },
				}}
			>
				{children}
			</motion.div>
		)}
	</>
);

SpringDown.propTypes = {
	children: PropTypes.any.isRequired,
};
SpringUpHover.propTypes = {
	children: PropTypes.any.isRequired,
};
export { SpringDown, SpringUpHover };
