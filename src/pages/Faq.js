import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";

import Config from "../config/config.json";
import RHelmet from "../layout/RHelmet";
import Sanitizer from "../hooks/Sanitizer";
import ErrorMsg from "../components/error/ErrorMsg";

const FAQ = () => {
	const [content, setContent] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);

		axios
			.get(`${Config.mainUrl}pages?include=1734`)
			.then((res) => {
				setContent(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error("Failed to get FAQ page", err);
				setError(true);
			});
	}, []);
	if (!loading) {
		return (
			<div>
				{content.map((x, i) => {
					return (
						<Fragment key={i}>
							<RHelmet
								pageMeta={{
									title: "FAQ",
								}}
							/>
							<Container className="mt-5 px-2">
								<Row>
									<Col>
										<h1 data-testid="faq-title">{x.title.rendered}</h1>
									</Col>
								</Row>
								<hr />
								<Row>
									<Col className="top10-text">
										<p
											dangerouslySetInnerHTML={{
												__html: Sanitizer(x.content.rendered),
											}}
										></p>
									</Col>
								</Row>
							</Container>
						</Fragment>
					);
				})}
			</div>
		);
	} else if (loading && !error) {
		return <Loading loading={loading} />;
	} else {
		return <ErrorMsg />;
	}
};
export default FAQ;
