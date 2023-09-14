import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import fireworks from "../../assets/images/headline-images/aboutMissions.png";
import gift from "../../assets/images/mission-images/gift.png";
import help from "../../assets/images/mission-images/help.png";
import options from "../../assets/images/mission-images/options.png";
import ChatBubble from "../chatBubble/chatBubble";
import { HeadLine } from "../shared/headLine.jsx";
import "./aboutMissions.css";
import "./missions.css";
import { NavBar } from "/src/components/navbar/navBar";
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function AboutMissions({ myPoints }) {
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
		<div>
			<NavBar myPoints={myPoints} headLine="Om kupongsystemet" omOppdrag="omOppdrag" dropDown="missionGroup" />
			<HeadLine headLine="OM KUPONGSYSTEMET" headImage={fireworks} />
			<div id="about-mission-body">
				<h1 id="mission-header">Hva er oppdrag og poeng?</h1>
				<p id="mission-txt">
					Oppdrag og poeng er en måte for deg som bruker atcampus skal kunne få belønning for din innsats til å
					hjelpe andre. Ved å gjøre ulike oppdrag kan du samle poeng og som du igjen kan bruke på mat, klær,
					drikke og andre ting en student trenger. <br />
					<br /> <strong>Hvordan får vi dette til?</strong> Dette er mulig ved hjelp av våre
					sammarbeidspartnere som gir golde avtaler som hjelper studenter å kunne ekstra avslag på et mangfold
					av varer.{" "}
				</p>

				<div className="aboutHr" />

				<h1 id="explanationH1">Hvordan funker det?</h1>

				<div id="explanation">
					<div className="explanation-div">
						<h3>1. Hjelp medstudenter med spørsmål og svar</h3>
						<div>
							<img src={help} alt=" Image" />
						</div>
					</div>
					<div className="explanation-div">
						<h3>2. Få poeng og finn dine kuponger</h3>
						<div>
							<img src={options} alt=" Image" />
						</div>
					</div>
					<div className="explanation-div">
						<h3>3. Få dine belønninger</h3>
						<div>
							<img src={gift} alt=" Image" />
						</div>
					</div>
				</div>
				<ChatBubble />
			</div>
		</div>
	);
}
