import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./frontPage.css";
import feide from "/src/assets/images/feide_logo.png";
import frontpage_illustrations from "/src/assets/images/frontpage_illustration.png";
import atCampus_logo_small from "/src/assets/images/navbar-images/atCampus_logo_small.jpg";

export function FrontPage() {
	return (
		<div>
			<Navbar expand="lg" className="atCampusNav">
				<div>
					<Navbar.Brand>
						<img src={atCampus_logo_small} className="atCampusLogo" />
					</Navbar.Brand>
				</div>
			</Navbar>

			<div className={"frontpage_parent"}>
				<div className={"left_side"}>
					<div className={"frontpage_illustrations_parent"}>
						<img src={frontpage_illustrations} className={"frontpage_illustrations"} />
					</div>
				</div>
				<div className={"right_side"}>
					<h1 className={"atCampus_header"}>
						Hjelp deg selv, <br />
						med å hjelpe andre
					</h1>
					<p className={"atCampus_info_text"}>
						atCampus er et sted hvor du enkelt kan stille spørsmål anonymt, innenfor dine relevante fag.{" "}
						<br />
						Du kan også se og følge spørsmål som andre i klassen din stiller. Medstudenter vil svare raskt på spørsmålene dine og gi deg god hjelp på veien.
					</p>

					<div className={"feide_div"}>
						<div className={"feide_image_parent"}>
							<img src={feide} className={"feide_logo"} />
						</div>
						<p className={"feide_info"}>Du må logge deg på via Feide for å få tilgang til atCampus</p>
						<div className={"loginTxt"}>
							<Link to="/login" className={"loginTxtLink"}>
								Innlogging via Feide
							</Link>
						</div>
					</div>

					<div className={"social_media_links"}>
						<a href={"https://www.instagram.com/atcampus_/"}>
							<FontAwesomeIcon icon={faInstagram} className={"instagram_logo"} color={"black"} />
						</a>

						<a href={"https://www.facebook.com/atcampusnorway"}>
							<FontAwesomeIcon icon={faFacebook} className={"facebook_logo"} color={"black"} />
						</a>

						<a href={"https://www.linkedin.com/company/atcampusas/about/"}>
							<FontAwesomeIcon icon={faLinkedin} className={"linkedin_logo"} color={"black"} />
						</a>

						<a href={"https://twitter.com/atcampus_"}>
							<FontAwesomeIcon icon={faTwitter} className={"twitter_logo"} color={"black"} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
