import React, { Component } from "react";
import axios from "axios";
import dayjs from "dayjs";
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
import { Load, Previous } from "../components/buttons/PaginationBtns";
import ErrorMsg from "../components/error/ErrorMsg";

class CategoryBrowse extends Component {
	state = {
		posts: [],
		isLoading: false,
		totalPages: "",
		currentPage: 1,
		search: "",
		noPosts: false,
		offset: 0,
		error: false,
	};

	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		axios
			.get(
				`${Config.mainUrl}posts?per_page=8&categories=${this.props.match.params.catId}`
			)
			.then((res) => {
				this.setState({
					posts: res.data,
					totalPages: res.headers["x-wp-totalpages"],
					isLoading: false,
				});
			})
			.catch((err) => {
				console.error("Failed to get posts via categories", err);
				this.setState({
					error: true,
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		const {
			match: {
				params: { catId },
			},
		} = this.props;
		const prevPostId = prevProps.match.params.catId;
		if (prevPostId !== catId) {
			this.setState({
				isLoading: true,
			});
			axios
				.get(
					`${Config.mainUrl}posts?per_page=8&categories=${this.props.match.params.catId}`
				)
				.then((res) => {
					this.setState({
						posts: res.data,
						totalPages: res.headers["x-wp-totalpages"],
						isLoading: false,
					});
				})
				.catch((err) => {
					console.error("Failed to get updated posts via categories", err);
					this.setState({
						error: true,
					});
				});
		}
	}

	nextPage = (pageNumber) => {
		this.setState({
			isLoading: true,
		});
		axios
			.get(
				`${Config.mainUrl}posts/?per_page=8&categories=${this.props.match.params.catId}&page=${pageNumber}`
			)
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
				console.error("Failed to get more posts via categories", err);
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
			.get(
				`${Config.mainUrl}posts?per_page=8&categories=${this.props.match.params.catId}&search=${this.state.search}`
			)
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
				console.error("Failed to get posts via categories with search", err);
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
				`${Config.mainUrl}posts/?per_page=8&categories=${this.props.match.params.catId}&search=${this.state.search}&page=${pageNumber}`
			)
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
				console.error(
					"Failed to get more posts via categories with search",
					err
				);
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
		const getParamsTitle = this.props.match.params.name;

		if (!isLoading && posts.length > 0 && !error) {
			return (
				<>
					<RHelmet
						pageMeta={{
							title: getParamsTitle,
							description: `Search for posts relating to ${getParamsTitle} on Delightfully Tasty.`,
						}}
					/>
					<div className="browserContainer">
						<h1 className="my-4">
							CATEGORY: {getParamsTitle.replace(/^\w/, (c) => c.toUpperCase())}
						</h1>
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
								<h4>Sorry no such posts found!</h4>
								<p>Search again or browse posts below</p>
							</div>
						) : null}
						{totalPages === "0" ? (
							<div className="mx-auto text-center mt-4">
								<p>All the empty-ness</p>
								<img
									src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
									alt="desert"
									className="w-50"
								/>
							</div>
						) : (
							<Row className="d-flex justify-content-center" role="main">
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
												categories={cat}
												excerpt={post.excerpt.rendered}
												image={post.featured_image_src}
												imageII={url}
												searchResults={this.searchResults}
												slug={post.slug}
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
					</div>
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
export default CategoryBrowse;
