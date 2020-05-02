import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Navigation() {
	return (
		<Navbar expand="lg" className="navigationBar">
			<Link to="/">
				<div className="logo mx-3">
					<p>Delightfully Tasty</p>
				</div>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto navTabs">
					<Link to="/browse">POSTS</Link>
					<Link to="/cuisines-category">CUISINES</Link>
					<Link to="/about">ABOUT AUTHOR</Link>
				</Nav>
				<Nav className="ml-auto navIcons">
					<Nav.Link href="mailto: delightfullytastymelb@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} size="lg"></FontAwesomeIcon>
					</Nav.Link>

					<Nav.Link
						href="https://www.facebook.com/delightfullytasty/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon>
					</Nav.Link>

					<Nav.Link
						href="https://www.instagram.com/delightfullytasty/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
export default Navigation;
