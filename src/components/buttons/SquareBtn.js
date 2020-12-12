import React from "react";
import { SpringDown } from "./SpringButtons";
import PropTypes from "prop-types";

const SquareBtn = ({ title }) => <SpringDown>{title}</SpringDown>;

SquareBtn.propTypes = {
	title: PropTypes.string.isRequired,
};
export default SquareBtn;
