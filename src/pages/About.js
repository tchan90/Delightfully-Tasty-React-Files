import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
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
			.get("https://www.delightfullytastymelb.com/wp-json/wp/v2/pages?id=2")
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
				<Container className="mt-5">
					<Row>
						{about.map((x, i) => {
							return (
								<Fragment key={i}>
									<Col lg={6} sm={12}>
										<img
											src={AuthorImg.imageURL}
											alt="authorProfilepic"
											className="rounded-circle w-75 center-img"
										/>
									</Col>
									<Col lg={6} sm={12} className="about-text">
										<p
											dangerouslySetInnerHTML={{ __html: x.content.rendered }}
										></p>
									</Col>
								</Fragment>
							);
						})}
					</Row>
				</Container>
			);
		} else if (loading && !error) {
			return (
				<span className="d-flex justify-content-center">
					<Spinner animation="border" role="status" className=" mt-3">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</span>
			);
		} else {
			return <ErrorMsg />;
		}
	}
}
export default About;
