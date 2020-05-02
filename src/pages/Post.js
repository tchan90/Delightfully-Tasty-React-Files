import React, { Component, Fragment } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Spinner } from "react-bootstrap";
import PageTurner from "../components/buttons/PageTurner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import RelatedPosts from "../components/postComponents/RelatedPosts";
import ErrorMsg from "../components/error/ErrorMsg";
import Comments from "../components/postComponents/Comment";

class Post extends Component {
	state = {
		post: [],
		loading: false,
		comments: [],
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
					`https://www.delightfullytastymelb.com/wp-json/wp/v2/posts?include[]=${this.props.match.params.id}`
				),
				axios.get(
					`https://www.delightfullytastymelb.com/wp-json/wp/v2/comments/?post=${this.props.match.params.id}`
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
				console.log(err);
				this.setState({
					error: true,
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
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
				.get(
					`https://www.delightfullytastymelb.com/wp-json/wp/v2/posts?include[]=${this.props.match.params.id}`
				)
				.then((res) => {
					this.setState({
						post: res.data,
						loading: false,
					});
				})
				.catch((err) => {
					console.log(err);
					this.setState({
						error: true,
					});
				});
		}
	}

	render() {
		const { post, loading, comments, noPost, error } = this.state;
		if (!loading && noPost) {
			return (
				<div className="text-center">
					<h4>No such post exist</h4>
					<p>
						<Link to="/browse">Click here </Link> to go back browsing
					</p>
				</div>
			);
		} else if (!loading && post.length > 0) {
			return (
				<div className="postBg">
					{post.map((p) => {
						const cat = p.cats;
						const nextP = p.nextPost;
						const prevP = p.prevPost;
						const nextID = nextP.ID;
						const prevID = prevP.ID;
						return (
							<div className="postWrapper" key={p.id}>
								<Fragment>
									<Moment format="D MMM YYYY" className="date-style">
										{p.date}
									</Moment>
									<h1
										className="my-3"
										dangerouslySetInnerHTML={{ __html: p.title.rendered }}
									></h1>
									<hr />
									<br />
									<p
										dangerouslySetInnerHTML={{ __html: p.content.rendered }}
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
									className="d-flex justify-content-between mx-3"
									style={{ marginTop: "30px" }}
								>
									<span>
										{prevP ? (
											<Link to={`/post/${prevID}`} onClick={this.scrollToTop}>
												<FontAwesomeIcon
													icon={faBackward}
													size="lg"
												></FontAwesomeIcon>

												<PageTurner
													title="Previous post"
													name={prevP.post_title}
												/>
											</Link>
										) : null}
									</span>
									<span className="text-right">
										{nextP ? (
											<Link to={`/post/${nextID}`} onClick={this.scrollToTop}>
												<FontAwesomeIcon
													icon={faForward}
													size="lg"
												></FontAwesomeIcon>
												<PageTurner title="Next post" name={nextP.post_title} />
											</Link>
										) : null}
									</span>
								</div>
								<RelatedPosts
									relatedPosts={p.relPosts}
									scrollToTop={this.scrollToTop}
								/>
								{/* <Comments id={p.id} comments={comments} /> */}
							</div>
						);
					})}
				</div>
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

export default Post;
