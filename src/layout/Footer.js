import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	const getYear = new Date().getFullYear();
	return (
		<div className="container-fluid footer" data-testid="footer">
			<div className="section-1">
				<ul className="d-flex justify-content-center">
					<li>
						<a
							href="https://www.facebook.com/delightfullytasty/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="facebook"
						>
							<FontAwesomeIcon
								icon={faFacebook}
								size="2x"
								data-testid="icon-fb"
								aria-labelledby="facebook page"
							></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/delightfullytasty/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="instagram"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								size="2x"
								data-testid="icon-ins"
								aria-labelledby="instagram page"
							></FontAwesomeIcon>
						</a>
					</li>
					<li>
						<a
							href="mailto: delightfullytastymelb@gmail.com"
							aria-label="email"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								size="2x"
								data-testid="icon-mail"
								aria-labelledby="email"
							></FontAwesomeIcon>
						</a>
					</li>
				</ul>
			</div>
			<div className="section-2">
				<ul className="d-flex justify-content-center">
					<li className="copyright" data-testid="copyright text">
						&copy; {getYear} Delightfully Tasty. All Rights Reserved.
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Footer;
