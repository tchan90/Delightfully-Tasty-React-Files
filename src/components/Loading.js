import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loading = ({ loading }) => {
	if (loading) {
		return (
			<div data-testid="loadingIcon" className="d-flex justify-content-center">
				<PulseLoader loading={loading} color="lightblue" size={13} />
			</div>
		);
	}
	return null;
};

export default Loading;
