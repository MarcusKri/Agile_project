import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ChatBubble from "../chatBubble/chatBubble";
import { HeadLine } from "../shared/headLine.jsx";
import MissionCardCompleted from "./cards/missionCardCompleted";
import "./missions.css";
//IMAGE
import missionImage from "/src/assets/images/headline-images/missions.png";
import { NavBar } from "/src/components/navbar/navBar";
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function Missions({ myPoints, setMyPoints }) {
	const claimedPoints = (points) => {
		setMyPoints(myPoints + points);
		console.log("points", points);
	};

	const startAnimation = () => {
		document.getElementById("no-animation").id = "animation";
		console.log("id changed");

		setTimeout(function () {
			removeAnimation();
		}, 2000);
	};
	const removeAnimation = () => {
		document.getElementById("animation").id = "no-animation";
	};
	const { loading, error } = useLoader(async () => {
		return await fetchJSON("/api/login");
	});

	if (loading) {
		return <></>;
	}

	if (error) {
		return <ErrorHandler />;
	}

	return (
		<div className="missionsMain">
			<NavBar myPoints={myPoints} oppdrag="Oppdrag" dropDown="missionGroup" />
			<HeadLine headLine="OPPDRAG" headImage={missionImage} />
			<div className="alertWrapper" id="no-animation">
				<div className="alert alert-success d-flex align-items-center" role="alert" id="successAlert">
					<FontAwesomeIcon icon={faCheckCircle} size="1x" />
					<div> &nbsp; Din kupong har blitt løst inn! </div>
				</div>
			</div>
			<div class="missionCardParent">
				<MissionCardCompleted
					uniqueCardId={1}
					title="Endre profilbilde"
					description="Endre bildet på profilen din for å få poeng"
					points={60}
					claimedPointsFunction={claimedPoints}
					startAnimationFunction={startAnimation}
				/>

				<MissionCardCompleted
					uniqueCardId={2}
					title="Bli med i en kollokviegruppe"
					description="Bli med i en kolokviegruppe på gruppesiden"
					points={30}
					claimedPointsFunction={claimedPoints}
					startAnimationFunction={startAnimation}
				/>
				<MissionCardCompleted
					uniqueCardId={3}
					title="Hjelp en medstudent med å svare på et spørsmål"
					description="Hjelp en medstudent med å svare på et spørmål som har blitt spurt."
					points={50}
					claimedPointsFunction={claimedPoints}
					startAnimationFunction={startAnimation}
				/>

				<MissionCardCompleted
					uniqueCardId={4}
					title="Kommenter på ett innlegg"
					description="Kommenter på et innlegg som er feil eller som trenger mer kontekst."
					points={40}
					claimedPointsFunction={claimedPoints}
					startAnimationFunction={startAnimation}
				/>

				<ChatBubble />
			</div>
		</div>
	);
}
