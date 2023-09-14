//IMPORTS
import { faBars, faMessage, faPeopleGroup, faPerson, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./asideNav.css";
import FindChoices from "./findChoices";

//EXPORT COMPONENT
export default function showAside() {
	function showAside() {
		//GET DIFFRENT ELEMENTS
		const asideNav = document.getElementById("aside");
		const asideBurger = document.querySelector(".asideHamburger");
		const width = document.querySelector(".asideWrapper");

		asideBurger.classList.add("hideAside");

		asideNav.classList.add("showAside");
		asideNav.classList.remove("hideAside");
		asideNav.classList.remove("asideNav");

		width.classList.remove("hideAside");
		//ALL ELEMENTS ARE REMOVED AND DISPLAYED WITH THE HELP OF "HIDE" AND "SHOW" CLASSES

	}

	function hideAside() {
		//GET DIFFRENT ELEMENTS

		const asideNav = document.getElementById("aside");
		const asideBurger = document.querySelector(".asideHamburger");
		const width = document.querySelector(".asideWrapper");

		asideBurger.classList.remove("hideAside");

		asideNav.classList.remove("showAside");
		asideNav.classList.add("hideAside");

		width.classList.add("hideAside");
		
		//ALL ELEMENTS ARE REMOVED AND DISPLAYED WITH THE HELP OF "HIDE" AND "SHOW" CLASSES
	}

	function normalAside() {
		//GET DIFFRENT ELEMENTS

		const width = document.querySelector(".asideWrapper");

		width.classList.add("normalWidth");
		width.classList.remove("largeWidth");
		// Gives parent wrapper a class with a smaller width

	}

	function hugeAside() {
		const width = document.querySelector(".asideWrapper");

		width.classList.remove("normalWidth");
		width.classList.add("largeWidth");

		// Gives parent wrapper a class with a larger width

	}

	return (
		<div>

			<div className="asideHamburger">
				<button onClick={showAside} className="showBtn">
					<FontAwesomeIcon icon={faBars} className="asideHamburgerIcon" />
				</button>
			</div>

			<div className="asideWrapper">
				{/* HAMBURGER MENU */}
			
				<div className="">
					<div className="asideNav" id="aside">
						
						<div className="hideHamburger">
							<div className="asideBtns">
								<div className="closeBtn" onClick={hideAside} />
								<div className="normalBtn" onClick={normalAside} />
								<div className="hugeBtn" onClick={hugeAside} />
							</div>
						</div>
						<div className="asideHeader">
							<h3>Grupper</h3>
						</div>


						{/* FIND GROUPS */}
						<div className="asideContent">
							<div className="asideLinks">
								<div className="asideBtn">
									<Link to={"/myGroupPage"} id="RemoveStyleBlack" className="asideBtnLink">
										<div className="asideBtnIcon">
											<FontAwesomeIcon icon={faPeopleGroup} className="asideBtnIcon" /> &nbsp;
										</div>
										<div className="asideBtnP">
											<p>Mine Grupper </p>
										</div>
									</Link>
								</div>
								<div className="asideBtn">
									<Link to={"/chat"} id="RemoveStyleBlack" className="asideBtnLink">
										<div className="asideBtnIcon">
											<FontAwesomeIcon icon={faMessage} className="asideBtnIcon" /> &nbsp;
										</div>
										<div className="asideBtnP">
											<p>Gruppe Chat</p>
										</div>
									</Link>
								</div>
								<div className="asideBtn">
									<Link to={"/createGroup"} id="RemoveStyleBlack" className="asideBtnLink">
										<div className="asideBtnIcon">
											<FontAwesomeIcon icon={faPerson} className="asideBtnIcon" /> &nbsp;
										</div>
										<div className="asideBtnP">
											<p> Opprett Gruppe </p>
										</div>
									</Link>
								</div>
								<div className="asideBtn">
									<Link to={"/findGroup"} id="RemoveStyleBlack" className="asideBtnLink">
										<div className="asideBtnIcon">
											<FontAwesomeIcon icon={faSearch} /> &nbsp;
										</div>
										<div className="asideBtnP">
											<p>Finn Grupper </p>
										</div>
									</Link>
								</div>
							</div>
							<div className="asideFind">
								<div className="findGroupsContent">
									<h3>Finn Grupper</h3>
									<FindChoices />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
