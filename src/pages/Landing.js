import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import CuisineData from "../data/cuisineData";
import {
	HeroImages,
	InternationalBg,
	AuthorImg,
} from "../routes/LandingImages";

import Hero from "../components/Hero";
import FeaturePosts from "../components/landingComponents/FeaturePosts";
import InternationalBanner from "../components/landingComponents/InternationalBanner";
import Cuisines from "../components/landingComponents/Cuisines";
import Instagram from "../components/landingComponents/Instagram";
import Author from "../components/landingComponents/Author";
import PopularPosts from "../components/landingComponents/PopularPosts";
import ErrorMsg from "../components/error/ErrorMsg";

class Landing extends Component {
	state = {
		images: [],
		recentPosts: [],
		isLoading: false,
		cuisines: [CuisineData],
		noInsta: false,
		noPosts: false,
		error: false,
	};
	componentDidMount() {
		let num_photos = 9;
		this.setState({
			isLoading: true,
		});
		axios
			.all([
				axios.get(
					`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTA_TOKEN}` +
						"&count=" +
						num_photos
				),
				axios.get(
					"https://delightfullytastymelb.com/wp-json/wp/v2/posts/?per_page=4"
				),
			])
			.then(
				axios.spread((instagramRes, wpRes) => {
					if (!instagramRes.data.data.length) {
						this.setState({
							noInsta: true,
							isLoading: false,
						});
					}
					if (!wpRes.data.length) {
						this.setState({
							noPosts: true,
							isLoading: false,
						});
					}
					this.setState({
						images: instagramRes.data.data,
						recentPosts: wpRes.data,
						isLoading: false,
					});
				})
			)
			.catch((err) => {
				console.log(err);
				this.setState({
					error: true,
				});
			});
	}

	render() {
		const {
			images,
			recentPosts,
			isLoading,
			cuisines,
			noInsta,
			noPosts,
			error,
		} = this.state;
		const heroImgs = HeroImages.images;
		if (!isLoading && !error) {
			return (
				<div className="animated fadeIn">
					<Hero
						heroImgLeft={heroImgs[0].imageURL}
						heroImgMid={heroImgs[1].imageURL}
						heroImgRight={heroImgs[2].imageURL}
					/>

					<section className="panel">
						{noPosts ? (
							<ErrorMsg />
						) : (
							<FeaturePosts heading="Recent Posts" recentPosts={recentPosts} />
						)}
					</section>
					<section className="panel">
						<PopularPosts heading="Popular Posts" />
					</section>
					<section className="panel">
						{cuisines.length > 0 ? (
							<Cuisines heading="Cuisines" cuisines={cuisines} />
						) : (
							<ErrorMsg />
						)}
					</section>
					<section className="panel">
						<InternationalBanner interImg={InternationalBg.imageURL} />
					</section>
					<section className="panel">
						{noInsta ? (
							<ErrorMsg />
						) : (
							<Instagram heading="Instagram" images={images} />
						)}
					</section>
					<section className="panel">
						<Author heading="About Me" image={AuthorImg.imageURL} />
					</section>
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
export default Landing;
