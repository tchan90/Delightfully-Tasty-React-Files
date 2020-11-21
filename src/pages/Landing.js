import React, { Component } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import Helmet from "react-helmet";

import Config from "../config/config.json";
import cuisines from "../data/cuisineData";
import { HeroImages } from "../routes/LandingImages";
import Hero from "../components/Hero";
import FeaturePosts from "../components/landingComponents/FeaturePosts";
import InternationalBanner from "../components/landingComponents/InternationalBanner";
import Cuisines from "../components/landingComponents/Cuisines";
import Instagram from "../components/landingComponents/Instagram";
import PopularPosts from "../components/landingComponents/PopularPosts";
import ErrorMsg from "../components/error/ErrorMsg";

class Landing extends Component {
	state = {
		images: [],
		recentPosts: [],
		isLoading: false,
		noInsta: false,
		noPosts: false,
		error: false,
	};
	componentDidMount() {
		this.setState({
			isLoading: true,
		});
		axios
			.all([
				axios.get(
					`${Config.instagram}media?fields=id,media_url,permalink&access_token=${process.env.REACT_APP_INSTA_TOKEN}`
				),
				axios.get(`${Config.mainUrl}posts/?per_page=4`),
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
				console.error(
					"Failed to get instagram data and top 4 recent WP posts",
					err
				);
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
			noInsta,
			noPosts,
			error,
		} = this.state;
		const heroImgs = HeroImages.images;
		const filteredImages = images.slice(0, 9);
		if (!isLoading && !error) {
			return (
				<>
					<Helmet>
						<title>Delightfully Tasty</title>
					</Helmet>
					<div className="animated fadeIn">
						<Hero
							heroImgLeft={heroImgs[0].imageURL}
							heroImgMid={heroImgs[1].imageURL}
							heroImgRight={heroImgs[2].imageURL}
						/>
						<div className="landing-content-wrapper">
							<section className="panel">
								{noPosts ? (
									<ErrorMsg />
								) : (
									<FeaturePosts
										heading="Recent Posts"
										recentPosts={recentPosts}
									/>
								)}
							</section>
							<section className="panel panel--popular-margin">
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
								<InternationalBanner />
							</section>
							<section className="panel">
								{noInsta ? (
									<ErrorMsg />
								) : (
									<Instagram heading="Instagram" images={filteredImages} />
								)}
							</section>
						</div>
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
export default Landing;
