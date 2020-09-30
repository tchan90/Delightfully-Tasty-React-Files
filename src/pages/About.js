import React, { Component, Fragment } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Container, Row, Col } from "react-bootstrap";

import Config from "../config/config.json";
import RHelmet from "../layout/RHelmet";
import ErrorMsg from "../components/error/ErrorMsg";
import { AuthorImg } from "../routes/LandingImages";

class About extends Component {
	state = {
		about: [],
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
				console.log(err);
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
											<h1>{x.title.rendered}</h1>
										</Col>
									</Row>
									<Row className="mt-5">
										<Col lg={6} sm={12}>
											<img
												src={AuthorImg.imageURL}
												alt="authorProfilepic"
												className="rounded-circle w-75 center-img"
											/>
										</Col>
										<Col lg={6} sm={12} className="about-text">
											<p
												dangerouslySetInnerHTML={{
													__html: x.content.rendered,
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
			return (
				<div className="d-flex justify-content-center">
					<PulseLoader loading={loading} color="lightblue" size={13} />
				</div>
			);
		} else {
			return <ErrorMsg />;
		}
	}
}
export default About;
