//USED IF WE WANT TO IMPLEMENT A MISSION THATS ABOUT TO RUN OUT


//IMPORT
import { faBullseye, faExclamation, faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card } from "react-bootstrap";
import "../../../css/missionCSS/cardCSS/missionCard.css";

//ICONS
function WarningIcon() {
	return (
		<div class="warningIcon bg-warning">
			<FontAwesomeIcon icon={faExclamation} />
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
export default function MissionCardExpired(props) {
	return (
		<Card className="col-sm-10 col-md-5" id="missionCard">
			<Card.Header className="bootstrapCardHeader">
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
									<p>Oppdraget går ut om {props.timeLeft} timer </p>
								</div>
								<WarningIcon />
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
			</Card.Text>
		</Card>
	);
}
