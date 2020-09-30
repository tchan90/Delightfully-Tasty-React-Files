import ReactGA from "react-ga";
import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Route, Switch } from "react-router-dom";

import Navigation from "./layout/Navigation";
import PulseLoader from "react-spinners/PulseLoader";
import MyErrorBoundary from "./components/error/ErrorBoundary";
const Landing = lazy(() => import("./pages/Landing"));
const Post = lazy(() => import("./pages/Post"));
const About = lazy(() => import("./pages/About"));
const Browse = lazy(() => import("./pages/Browse"));
const CuisinesCat = lazy(() => import("./pages/CuisinesCat"));
const CategoryBrowse = lazy(() => import("./pages/CategoryBrowse"));
const Error = lazy(() => import("./components/error/ErrorPage"));
const TopList = lazy(() => import("./pages/TopList"));
const FAQ = lazy(() => import("./pages/Faq"));

//Google Analytics
ReactGA.initialize("UA-163584952-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	return (
		<div className="content">
			<MyErrorBoundary>
				<Suspense
					fallback={
						<div className="d-flex justify-content-center">
							<PulseLoader loading color="lightblue" size={13} />
						</div>
					}
				>
					<Navigation />
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/post/:id/:title" exact component={Post} />
						<Route path="/about" exact component={About} />
						<Route path="/browse" exact component={Browse} />
						<Route path="/my-top-10" exact component={TopList} />
						<Route path="/faq" exact component={FAQ} />
						<Route path="/cuisines" exact component={CuisinesCat} />
						<Route
							path="/category/:name/:catId"
							exact
							component={CategoryBrowse}
						/>
						<Route path="*" exact component={Error} />
					</Switch>
				</Suspense>
			</MyErrorBoundary>
		</div>
	);
}

export default App;
