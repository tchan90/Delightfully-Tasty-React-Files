import React from "react";

function PageTurner({ title, name }) {
	return (
		<div className="mx-3 mt-2">
			<span style={{ color: "grey" }}>{title}</span>
			<p>{name}</p>
		</div>
	);
}
export default PageTurner;
