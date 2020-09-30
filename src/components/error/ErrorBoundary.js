import React, { Component } from "react";
import ErrorMsg from "./ErrorMsg";

class MyErrorBoundary extends Component {
	state = {
		error: null,
	};

	static getDerivedStateFromError(error) {
		// Update state so next render shows fallback UI.
		return { error: error };
	}

	render() {
		if (this.state.error) {
			// You can render any custom fallback UI
			return <ErrorMsg />;
		}
		return this.props.children;
	}
}
export default MyErrorBoundary;
