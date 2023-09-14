import { faGem, faCommentDots, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import atCampus_logo_small from "/src/assets/images/navbar-images/atCampus_logo_small.jpg";
import { fetchJSON } from "/src/helpers/fetchJSON";
import "./navBar.css";
import { LoginContext } from "/src/contexts/login.context";

//ICON
function DiamondIcon() {
	return (
		<div className="diamondParent">
			<FontAwesomeIcon icon={faGem} id="diamond" />
		</div>
	);
}

export function NavBar(props) {
	const { discovery_endpoint } = useContext(LoginContext);
	const navigate = useNavigate();
	async function handleLogout(event) {
		event.preventDefault();
		await fetch("/api/login", { method: "delete" });
		const { end_session_endpoint } = await fetchJSON(discovery_endpoint);
		window.location.href = end_session_endpoint;
	}

	function noAlerts() {
		alert("Du har ingen varsler for øyeblikket.");
	}

	return (
		<div className="navBarWrapper">
			<Navbar expand="lg" className="atCampusNav">
				<div id="leftWrapper">
					<Navbar.Brand>
						<Link to={"/mypage"} id="RemoveStyle">
							<img src={atCampus_logo_small} className="atCampusLogo" />
						</Link>
					</Navbar.Brand>
					<div id="myPoints">
						{" "}
						<DiamondIcon />
						<div id="pointText">{props.myPoints}</div>
					</div>
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<div className="navLinks">
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link onClick={noAlerts}>
								<FontAwesomeIcon className="ps" icon={faBell} />
							</Nav.Link>

							<Nav.Link>
								<Link to={"/myGroupPage"} id="RemoveStyle" class={props.grupper}>
									<p className="ps">Grupper</p>
								</Link>
							</Nav.Link>

							<NavDropdown title="Belønninger" className={`RemoveStyle ${props.dropDown}`}>
								<NavDropdown.Item>
									<Link to={"/missions"} id="RemoveStyleBlack" class={props.oppdrag}>
										<p> Oppdrag</p>
									</Link>
								</NavDropdown.Item>

								<NavDropdown.Item>
									<Link to={"/rewards-page"} id="RemoveStyleBlack" class={props.kuponger}>
										<p>Kuponger</p>
									</Link>
								</NavDropdown.Item>

								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link to={"/aboutMissions"} id="RemoveStyleBlack" class={props.omOppdrag}>
										<p>Om Kupongsystemet</p>
									</Link>
								</NavDropdown.Item>
							</NavDropdown>

							<div className="logIn">
								<Nav.Link>
									<Link to={"/mypage"} id="RemoveStyle" class={props.minSide}>
										<p className="ps">Min Side</p>
									</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to onClick={handleLogout} id="RemoveStyle">
										Logg ut
									</Link>
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</div>
	);
}
