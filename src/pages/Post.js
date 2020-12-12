import React, { Component, Fragment } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import PulseLoader from "react-spinners/PulseLoader";

import RHelmet from "../layout/RHelmet";
import Sanitizer from "../hooks/Sanitizer";
import Config from "../config/config.json";
import PageTurner from "../components/buttons/PageTurner";
import RelatedPosts from "../components/postComponents/RelatedPosts";
import ErrorMsg from "../components/error/ErrorMsg";
import ErrorPage from "../components/error/ErrorPage";
// import Comments from "../components/postComponents/Comment";

class Post extends Component {
	state = {
		post: [],
		loading: false,
		// comments: [],
		noPost: false,
		error: false,
	};
	scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios
			.all([
				axios.get(
					`${Config.mainUrl}posts?include[]=${this.props.match.params.id}`
				),
				axios.get(
					`${Config.mainUrl}comments/?post=${this.props.match.params.id}`
				),
			])

			.then(
				axios.spread((postRes, commentRes) => {
					if (!postRes.data.length && !commentRes.data.length) {
						this.setState({
							noPost: true,
							loading: false,
						});
					} else {
						this.setState({
							post: postRes.data,
							comments: commentRes.data,
							loading: false,
							noPost: false,
						});
					}
				})
			)
			.catch((err) => {
				console.error("Failed to get post data", err);
				this.setState({
					error: true,
				});
			});
	}

	componentDidUpdate(prevProps) {
		const {
			match: {
				params: { id },
			},
		} = this.props;
		const prevPostId = prevProps.match.params.id;
		if (prevPostId !== id) {
			this.setState({
				loading: true,
			});
			axios
				.get(`${Config.mainUrl}posts?include[]=${this.props.match.params.id}`)
				.then((res) => {
					this.setState({
						post: res.data,
						loading: false,
					});
				})
				.catch((err) => {
					console.error("Failed to get updated post data", err);
					this.setState({
						error: true,
					});
				});
		}
	}
	// For title tag
	unicodeToChar = (text) => {
		var element = document.createElement("div");
		element.innerHTML = text;
		return element.innerHTML;
	};

	render() {
		const { post, loading, comments, noPost, error } = this.state;
		if (!loading && noPost) {
			return <ErrorPage backToBrowse />;
		} else if (!loading && post.length > 0) {
			return (
				<div className="postBg animated fadeIn">
					{post.map((p) => {
						const metaTitle = this.unicodeToChar(p.title.rendered);
						const cat = p.cats;
						const nextP = p.nextPost;
						const prevP = p.prevPost;
						const nextID = nextP.ID;
						const prevID = prevP.ID;
						// format date
						const parseDate = dayjs(p.date);
						const publishedDate = parseDate.format("DD MMM YYYY");
						return (
							<Fragment key={p.id}>
								<RHelmet
									pageMeta={{
										title: metaTitle,
									}}
								/>
								<div className="postWrapper">
									<Fragment>
										<span className="date-style">{publishedDate}</span>
										<h1
											className="my-3"
											dangerouslySetInnerHTML={{
												__html: Sanitizer(p.title.rendered),
											}}
										></h1>
										<hr />
										<br />
										<p
											dangerouslySetInnerHTML={{
												__html: Sanitizer(p.content.rendered),
											}}
										></p>{" "}
										<em>
											Tags:{" "}
											{cat.map((c, i) => {
												return (
													<Link
														to={`/category/${c.name}/${c.cat_ID}`}
														key={c.cat_ID}
													>
														<span className="tagStyle" key={i}>
															{" "}
															{c.name}{" "}
														</span>
													</Link>
												);
											})}
										</em>
									</Fragment>
									<hr />

									<div
										className="pageTuner-section"
										style={{ marginTop: "30px" }}
									>
										<span>
											{prevP ? (
												<Link
													to={`/post/${prevID}/${prevP.post_title}`}
													onClick={this.scrollToTop}
												>
													<span aria-label="previousPage">
														<FontAwesomeIcon
															icon={faBackward}
															size="lg"
														></FontAwesomeIcon>
													</span>

													<PageTurner
														title="Previous post"
														name={prevP.post_title}
														ariaLabelledby="previousPost"
													/>
												</Link>
											) : null}
										</span>
										<span className="text-right">
											{nextP ? (
												<Link
													to={`/post/${nextID}/${nextP.post_title}`}
													onClick={this.scrollToTop}
												>
													<span aria-label="nextPage">
														<FontAwesomeIcon
															icon={faForward}
															size="lg"
														></FontAwesomeIcon>
													</span>

													<PageTurner
														title="Next post"
														name={nextP.post_title}
														ariaLabelledby="nextPost"
													/>
												</Link>
											) : null}
										</span>
									</div>
									<RelatedPosts
										categories={p.categories}
										currentID={p.id}
										scrollToTop={this.scrollToTop}
									/>
									{/* <Comments id={p.id} comments={comments} /> */}
								</div>
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
	}
}

export default Post;
