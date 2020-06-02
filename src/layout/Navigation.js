import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Navigation() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar expand="lg" className="navigationBar" expanded={expanded}>
			<Link to="/">
				<div className="logo mx-3">
					<p>Delightfully Tasty</p>
				</div>
			</Link>
			<Navbar.Toggle
				aria-controls="responsive-navbar-nav"
				onClick={() => setExpanded(expanded ? false : "expanded")}
			/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto navTabs">
					<Link to="/browse" onClick={() => setExpanded(false)}>
						POSTS
					</Link>
					<Link to="/top-brunch" onClick={() => setExpanded(false)}>
						TOP BRUNCH
					</Link>
					<Link to="/faq" onClick={() => setExpanded(false)}>
						FAQ
					</Link>

					<Link to="/cuisines" onClick={() => setExpanded(false)}>
						CUISINES
					</Link>
					<Link to="/about" onClick={() => setExpanded(false)}>
						ABOUT AUTHOR
					</Link>
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
