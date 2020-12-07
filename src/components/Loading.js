import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loading = ({ loading }) => (
	<div data-testid="loadingIcon" className="d-flex justify-content-center">
		<PulseLoader loading={loading} color="lightblue" size={13} />
	</div>
);

export default Loading;
