import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ErrorMsg from "../error/ErrorMsg";

function Comment({ comments, id }) {
	const [isSent, setIsSent] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const [error, setError] = useState(false);
	const onSubmit = (data, e) => {
		e.preventDefault();
		fetch(
			`https://www.delightfullytastymelb.com//wp-json/wp/v2/comments/?post=${id}`,
			{
				method: "POST",
				body: JSON.stringify({ data }),
			}
		)
			.then(() => setIsSent(true))
			.catch((err) => {
				console.log(err);
				setError(true);
			});
	};

	return (
		<div className="mx-4 mt-5">
			<h3>Comments</h3>
			{error ? (
				<ErrorMsg />
			) : (
				<Form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
					<Form.Group controlId="commentBox" className="mx-4 mt-3">
						<Form.Control
							as="textarea"
							rows="3"
							name="comment"
							ref={register({ required: true })}
						/>
					</Form.Group>
					<div className="d-flex justify-content-end mr-4">
						<Button variant="primary" type="submit">
							Submit
						</Button>{" "}
					</div>
				</Form>
			)}

			{errors.comment && <span>Please add a comment before submitting</span>}
			{isSent ? (
				<span className="d-flex justify-content-center submitMsg">
					Comment sent!
				</span>
			) : null}
			{comments
				? comments.map((comment) => {
						return (
							<div className="commentSection" key={comment.ID}>
								<span
									className="d-flex justify-content-between"
									style={{ fontWeight: "bold" }}
								>
									<p>{comment.author_name}</p>
									<p>{comment.date}</p>
								</span>
								<p
									dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
								></p>
							</div>
						);
				  })
				: null}
		</div>
	);
}

export default Comment;
