import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Route, Switch } from "react-router-dom";

import Navigation from "./layout/Navigation";
// import NavigationTest from "./layout/NavigationTest";
import Landing from "./pages/Landing";
import Post from "./pages/Post";
import About from "./pages/About";
import Browse from "./pages/Browse";
import CuisinesCat from "./pages/CuisinesCat";
import CategoryBrowse from "./pages/CategoryBrowse";
import Error from "./components/error/ErrorPage";

function App() {
	return (
		<div className="content">
			<Navigation />

			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/post/:id" exact component={Post} />
				<Route path="/about" exact component={About} />
				<Route path="/browse" exact component={Browse} />
				<Route path="/cuisines-category" exact component={CuisinesCat} />
				<Route path="/category/:name/:catId" exact component={CategoryBrowse} />
				<Route path="*" exact component={Error} />
			</Switch>
		</div>
	);
}

export default App;
