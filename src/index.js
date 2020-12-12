import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Footer from "./layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => (
	<Router>
		<App key="1" /> <Footer key="2" />
	</Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
