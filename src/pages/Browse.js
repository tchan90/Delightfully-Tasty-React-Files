import React, { Component } from "react";
import axios from "axios";
import {
	Spinner,
	Row,
	Col,
	Form,
	Button,
	InputGroup,
	FormControl,
} from "react-bootstrap";
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
			.get(
				"https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/?per_page=8"
			)
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
			.get(
				`https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/?per_page=8&page=${pageNumber}`
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
			.get(
				`https://www.delightfullytastymelb.com/wp-json/wp/v2/posts?per_page=8&search=${this.state.search}`
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
				`https://www.delightfullytastymelb.com/wp-json/wp/v2/posts/?per_page=8&search=${this.state.search}&page=${pageNumber}`
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
		if (noPosts) {
			return <ErrorMsg />;
		}
		if (!isLoading && posts.length > 0 && !error) {
			return (
				<div className="browserContainer">
					<Form onSubmit={this.searchResults}>
						<InputGroup className="mb-3 search-bar mx-auto">
							<FormControl
								placeholder="Search Post"
								aria-label="Search Post"
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

								return (
									<Col xl={3} md={4} sm={12} className="my-1" key={post.id}>
										<InfoCard
											id={post.id}
											title={post.title.rendered}
											date={post.date}
											slug={post.slug}
											categories={cat}
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
				</div>
			);
		} else if (isLoading && !error) {
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
export default Browse;
