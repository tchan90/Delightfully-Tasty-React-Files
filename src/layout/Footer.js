import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="container-fluid footer">
			<div className="section-1">
				<ul className="d-flex justify-content-center">
					<li>
						<a
							href="https://www.facebook.com/delightfullytasty/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/delightfullytasty/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a href="mailto: delightfullytastymelb@gmail.com">
							<FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
						</a>
					</li>
				</ul>
			</div>
			<div className="section-2">
				<ul className="d-flex justify-content-center">
					<li className="copyright ">
						&copy; 2020 Delightfully Tasty. All Rights Reserved.
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Footer;
