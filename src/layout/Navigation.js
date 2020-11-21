import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import navLinks from "../data/navLinks.json";

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
			<Navbar
				expand="lg"
				className="navigationBar"
				expanded={expanded}
				data-testid="navigation"
			>
				<Link to="/">
					<div className="logo mx-3" data-testid="logo">
						<p>Delightfully Tasty</p>
					</div>
				</Link>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => setExpanded(expanded ? false : "expanded")}
				/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto navTabs">
						{navLinks &&
							Object.entries(navLinks).map(([key, content]) => (
								<span key={key}>
									<Link
										to={content}
										onClick={() => setExpanded(false)}
										className="mx-3"
										data-testid={`${key}-link`}
									>
										{key}
									</Link>
								</span>
							))}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</motion.div>
	);
}
export default Navigation;
