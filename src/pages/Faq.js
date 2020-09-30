import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

import Config from "../config/config.json";
import RHelmet from "../layout/RHelmet";
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
				console.log(err);
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
										<h1>{x.title.rendered}</h1>
									</Col>
								</Row>
								<Row>
									<Col className="top10-text">
										<p
											dangerouslySetInnerHTML={{ __html: x.content.rendered }}
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
		return (
			<div className="d-flex justify-content-center">
				<PulseLoader loading={loading} color="lightblue" size={13} />
			</div>
		);
	} else {
		return <ErrorMsg />;
	}
};
export default FAQ;
