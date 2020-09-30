import React from "react";

export default function ErrorMsg() {
	return (
		<div className="text-center error-msg">
			<p> Woops something went wrong!</p>
			<p>Please contact me if this message persists</p>
			<img
				className="vector-icons"
				src="https://www.delightfullytastymelb.com/wp-content/uploads/2020/06/kingdom-404-error.png"
				alt="404"
			/>
			<br />
			<p style={{ fontSize: "12px" }}>
				Illustration by <a href="undefined">Maria Shukshina</a> from{" "}
				<a href="https://icons8.com/">Icons8</a>
			</p>
		</div>
	);
}
