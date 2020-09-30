import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
	const [expanded, setExpanded] = useState(false);

	return (
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{
				duration: 0.2,
				type: "spring",
				stiffness: 260,
				damping: 20,
			}}
		>
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
					<Nav className="ml-auto navTabs">
						<Link to="/browse" onClick={() => setExpanded(false)}>
							POSTS
						</Link>
						<Link to="/cuisines" onClick={() => setExpanded(false)}>
							CUISINES
						</Link>
						<Link to="/my-top-10" onClick={() => setExpanded(false)}>
							MY TOP 10
						</Link>
						<Link to="/faq" onClick={() => setExpanded(false)}>
							FAQ
						</Link>
						<Link to="/about" onClick={() => setExpanded(false)}>
							ABOUT
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</motion.div>
	);
}
export default Navigation;
