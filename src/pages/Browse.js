import React, { Component } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";
import {
	Row,
	Col,
	Form,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";

import Config from "../config/config.json";
import RHelmet from "../layout/RHelmet";
import InfoCard from "../components/cards/InfoCard";
import ErrorMsg from "../components/error/ErrorMsg";
import { Load, Previous } from "../components/buttons/PaginationBtns";

class Browse extends Component {
	state = {
		posts: [],
		isLoading: false,
		totalPages: "",
		currentPage: 1,
		search: "",
		noPosts: false,
		error: false,
	};

	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		axios
			.get(`${Config.mainUrl}posts/?per_page=8`)
			.then((res) => {
				this.setState({
					posts: res.data,
					totalPages: res.headers["x-wp-totalpages"],
					isLoading: false,
				});
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					error: true,
				});
			});
	}

	nextPage = (pageNumber) => {
		this.setState({
			isLoading: true,
		});
		axios
			.get(`${Config.mainUrl}posts/?per_page=8&page=${pageNumber}`)
			.then((res) => {
				this.setState({
					posts: res.data,
					totalPages: res.headers["x-wp-totalpages"],
					isLoading: false,
					currentPage: pageNumber,
				});
			})
			.then(this.scrollToTop())
			.catch((err) => {
				console.log(err);
				this.setState({
					error: true,
				});
			});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	searchResults = (event) => {
		event.preventDefault();
		this.setState({
			isLoading: true,
		});
		axios
			.get(`${Config.mainUrl}posts?per_page=8&search=${this.state.search}`)
			.then((res) => {
				if (!res.data.length) {
					this.setState({
						noPosts: true,
						isLoading: false,
					});
				} else {
					this.setState({
						posts: res.data,
						totalPages: res.headers["x-wp-totalpages"],
						isLoading: false,
						noPosts: false,
						currentPage: 1,
					});
				}
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					error: true,
				});
			});
	};
	searchNext = (pageNumber) => {
		this.setState({
			isLoading: true,
		});
		axios
			.get(
				`${Config.mainUrl}posts/?per_page=8&search=${this.state.search}&page=${pageNumber}`
			)
			.then((res) => {
				this.setState({
					isLoading: false,
					posts: res.data,
					totalPages: res.headers["x-wp-totalpages"],
					currentPage: pageNumber,
				});
			})
			.then(this.scrollToTop())
			.catch((err) => {
				console.log(err);
				this.setState({
					error: true,
				});
			});
	};
	scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	render() {
		const {
			posts,
			isLoading,
			totalPages,
			currentPage,
			search,
			noPosts,
			error,
		} = this.state;
		if (!isLoading && posts.length > 0 && !error) {
			return (
				<>
					<RHelmet
						pageMeta={{
							title: "Posts",
						}}
					/>
					<motion.div
						className="browserContainer"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: "tween", duration: 0.2 }}
					>
						<Form onSubmit={this.searchResults}>
							<InputGroup className="mb-3 search-bar mx-auto">
								<FormControl
									placeholder="Search Posts"
									aria-label="Search Posts"
									aria-describedby="searchbutton"
									value={this.state.search}
									onChange={this.handleChange}
									name="search"
								/>
								<InputGroup.Append>
									<Button
										variant="outline-secondary"
										type="submit"
										onClick={this.scrollToTop}
									>
										Search
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
						{noPosts ? (
							<div className="text-center m-2">
								<h4>Sorry your search doesn't match any results</h4>
								<p>Try again or continue browsing below</p>
							</div>
						) : null}
						{totalPages === "0" ? (
							<div className="mx-auto text-center mt-4">
								<p>All the empty-ness</p>
								<img
									src="https://www.delightfullytastymelb.com/wp-content/uploads/2020/06/cherry-list-is-empty-1.png"
									alt="no posts"
									className="vector-icons"
								/>
								<p style={{ fontSize: "12px" }}>
									Illustration by
									<a href="https://dribbble.com/muratkalkavan">
										Murat Kalkavan
									</a>
									from <a href="https://icons8.com/">Icons8</a>
								</p>
							</div>
						) : (
							<Row className="d-flex justify-content-center">
								{posts.map((post) => {
									const cat = post.cats;
									//get first image if no featured img
									const parser = new DOMParser();
									const html = parser.parseFromString(
										post.content.rendered,
										"text/html"
									);
									const img = html.querySelector("img");
									const url = img ? img.src : "";
									// format date
									const parseDate = dayjs(post.date);
									const publishedDate = parseDate.format("DD MMM YYYY");
									return (
										<Col xl={3} md={4} sm={12} className="my-1" key={post.id}>
											<InfoCard
												id={post.id}
												title={post.title.rendered}
												date={publishedDate}
												slug={post.slug}
												categories={cat}
												categoryID={post.categories}
												excerpt={post.excerpt.rendered}
												image={post.featured_image_src}
												imageII={url}
											/>
										</Col>
									);
								})}
							</Row>
						)}
						<div className="d-flex justify-content-center mt-4">
							{currentPage > 1 ? (
								<Previous
									totalPages={totalPages}
									nextPage={search === "" ? this.nextPage : this.searchNext}
									currentPage={currentPage}
								/>
							) : null}
							{totalPages > 1 && currentPage < totalPages ? (
								<Load
									totalPages={totalPages}
									nextPage={search === "" ? this.nextPage : this.searchNext}
									currentPage={currentPage}
								/>
							) : null}
						</div>
						<p className="text-center mt-3">
							{currentPage} of {totalPages}
						</p>
					</motion.div>
				</>
			);
		} else if (isLoading && !error) {
			return (
				<div className="d-flex justify-content-center">
					<PulseLoader loading={isLoading} color="lightblue" size={13} />
				</div>
			);
		} else {
			return <ErrorMsg />;
		}
	}
}
export default Browse;
