import React, { Component, Fragment } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Container, Row, Col } from "react-bootstrap";

import Config from "../config/config.json";
import RHelmet from "../layout/RHelmet";
import Sanitizer from "../hooks/Sanitizer";
import ErrorMsg from "../components/error/ErrorMsg";
import { AuthorImg } from "../routes/LandingImages";

class About extends Component {
	state = {
		about: {},
		loading: false,
		error: false,
	};
	componentDidMount() {
		this.setState({
			loading: true,
		});
		axios
			.get(`${Config.mainUrl}pages?include=2`)
			.then((res) => {
				this.setState({ about: res.data, loading: false });
			})
			.catch((err) => {
				console.error("Failed to get About page", err);
				this.setState({
					error: true,
				});
			});
	}
	render() {
		const { about, error, loading } = this.state;
		if (!loading && about.length > 0 && !error) {
			return (
				<>
					{about.map((x, i) => {
						return (
							<Fragment key={i}>
								<RHelmet
									pageMeta={{
										title: "About",
									}}
								/>
								<Container className="mt-5">
									<Row>
										<Col>
											<h1 data-testid="about-title">{x.title.rendered}</h1>
										</Col>
									</Row>
									<hr />
									<Row className="mt-5">
										<Col lg={6} sm={12}>
											<img
												data-testid="author-avatar"
												src={AuthorImg.imageURL}
												alt="authorProfilepic"
												className="rounded-circle w-75 center-img"
											/>
										</Col>
										<Col lg={6} sm={12} className="about-text">
											<p
												data-testid="author-text"
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
				</>
			);
		} else if (loading && !error) {
			return <Loading loading={loading} />;
		} else {
			return <ErrorMsg />;
		}
	}
}
export default About;
