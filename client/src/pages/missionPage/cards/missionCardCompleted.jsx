//IMPORT
import { faBullseye, faCheck, faCheckCircle, faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card } from "react-bootstrap";
import "../../../css/missionCSS/cardCSS/missionCard.css";

//ICONS
function CompletedIcon() {
	return (
		<div class="completedIcon">
			<FontAwesomeIcon icon={faCheckCircle} />
		</div>
	);
}

function DiamondIcon() {
	return (
		<div class="diamondParent">
			<FontAwesomeIcon icon={faGem} id="diamond" />
		</div>
	);
}
function BullseyeIcon() {
	return (
		<div class="bullseyeIcon">
			<FontAwesomeIcon icon={faBullseye} id="diamond" size="3x" />
		</div>
	);
}

//MISSION CARD
export default function MissionCardCompleted(props) {
	const buttonFunction = (e) => {
		console.log("button click");
		claimPoints();
		changeAnimationValue();
		const button = document.getElementById("");

		const id = document.getElementById(e);

		id.classList.add("hide");
		e.disabled = true;
	};

	const claimPoints = () => {
		props.claimedPointsFunction(props.points);
	};

	const changeAnimationValue = () => {
		props.startAnimationFunction();
	};

	return (
		<div className="missionCardWrapper" id={props.uniqueCardId}>
			<Card className="" id="missionCard">
				<Card.Header className="bg-success bootstrapCardHeader">
					<div class="cardHeader">
						<div className="pointsAndHeader">
							<div id="points">
								<DiamondIcon />
								<h3>{props.points}</h3>
							</div>
							<div className="headerH3">
								<h3>Oppdrag</h3>
							</div>
						</div>

						<div className="iconParent">
							<div className="icons">
								<div className="flexCenter">
									<div className="icon-p">
										<p>Oppdraget er gjennomført</p>
									</div>
									<CompletedIcon />
								</div>
							</div>

							<div className="bullseyeParent">
								<BullseyeIcon />
							</div>
						</div>
					</div>
				</Card.Header>

				<Card.Text id="missionCardText" class="missionCardBody">
					<h3>
						<strong>{props.title}:</strong>
					</h3>
					<p>{props.description}.</p>
					<button type="button" className="missionBtn" onClick={() => buttonFunction(props.uniqueCardId)}>
						Løs inn
					</button>
				</Card.Text>
			</Card>
		</div>
	);
}
