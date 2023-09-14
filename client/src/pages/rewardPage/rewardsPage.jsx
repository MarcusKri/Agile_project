import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/rewardsPage.css";
import "./css/rewardsCard.css";
import { NavBar } from "/src/components/navbar/navBar";
import RewardPageNew from "./cards/RewardPageNew";
import { HeadLine } from "../shared/headLine.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

//IMAGE IMPORTS
//FIREWORKS
import fireworks from "../../assets/images/headline-images/qr.png";
//ARK
import arkLogo from "../../assets/images/rewards-images/ark-logo.jpg";
import arkImage from "../../assets/images/rewards-images/ark-image.jpg";
//LEVI'S
import levisLogo from "../../assets/images/rewards-images/levis-logo.png";
import levisImage from "../../assets/images/rewards-images/levis-image.jpg";
//GJENSIDIGE
import gjensidigeLogo from "../../assets/images/rewards-images/gjensidige-logo.png";
import gjensidigeImage from "../../assets/images/rewards-images/gjensidige-image.jpg";
//HK
import hkLogo from "../../assets/images/rewards-images/hk-logo.jpg";
import hkImage from "../../assets/images/rewards-images/hk-image.jpg";
//STORYTEL
import storytelLogo from "../../assets/images/rewards-images/storytell-logo.png";
import storytelImage from "../../assets/images/rewards-images/storytel-image.jpg";
//CLAS OHLSON
import clasohlsonLogo from "../../assets/images/rewards-images/clasohlson-logo.jpg";
import clasohlsonImage from "../../assets/images/rewards-images/clasohlson-image.jpg";
import ChatBubble from "../chatBubble/chatBubble";

//Error handler
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function RewardsPage({ myPoints, setMyPoints }) {
	const claimedPoints = (value) => {
		setMyPoints(myPoints - value);
		console.log("points", value);
	};

	const startAnimation = () => {
		document.getElementById("no-rewardAnimation").id = "rewardAnimation";
		console.log("id changed");

		setTimeout(function () {
			removeAnimation();
		}, 2000);
	};
	const removeAnimation = () => {
		document.getElementById("rewardAnimation").id = "no-rewardAnimation";
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
		<div>
			<NavBar myPoints={myPoints} kuponger="Kuponger" headLine="Kuponger" dropDown="missionGroup" />
			<HeadLine headLine="KUPONGER" headImage={fireworks} />
			<div className="animationWrapper" id="no-rewardAnimation">
				<div className="alert alert-danger d-flex align-items-center" role="alert" id="successAlert">
					<FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
					<div> &nbsp; For lav poengsum! </div>
				</div>
			</div>

			<div className="rewardPage">
				{/* ARK BOKHANDEL */}
				<RewardPageNew
					logo={arkLogo}
					title="Ark Bokhandel"
					offer="Tilbud"
					image={arkImage}
					text="Kjøp en få en tilbud hos bokforhandleren Ark, få den billigste boken gratis."
					value={90}
					uniqueId={1}
					myPoints={myPoints}
					startAnimationFunction={startAnimation}
					claimedPointsFunction={claimedPoints}
				/>

				{/* LEVI'S */}
				<RewardPageNew
					logo={levisLogo}
					title="Levi's Jeans"
					offer="Tilbud"
					image={levisImage}
					text="Få 10% på alle bukser og skjorter hos Levis"
					value={80}
					uniqueId={2}
					myPoints={myPoints}
					startAnimationFunction={startAnimation}
					claimedPointsFunction={claimedPoints}
				/>
				{/* GJENSIDIGE */}
				<RewardPageNew
					logo={gjensidigeLogo}
					title="Gjensidige Forsikring"
					offer="Sammarbeid"
					image={gjensidigeImage}
					text="Bytt forsikring til gjensidige og få billigere student avtaler."
					value={100}
					uniqueId={3}
					myPoints={myPoints}
					startAnimationFunction={startAnimation}
					claimedPointsFunction={claimedPoints}
				/>
				{/* HK */}
				<RewardPageNew
					logo={hkLogo}
					title="Kantinen"
					offer="Tilbud"
					image={hkImage}
					text="Bruk kupongen i kantinen og få 50% på all type kaffe."
					value={60}
					uniqueId={4}
					myPoints={myPoints}
					startAnimationFunction={startAnimation}
					claimedPointsFunction={claimedPoints}
				/>
				{/* STORYTEL */}
				<RewardPageNew
					logo={storytelLogo}
					title="Storytel"
					offer="Tilbud"
					image={storytelImage}
					text="Hør på det du liker og få en måned gratis lydbøker med storytell."
					value={70}
					uniqueId={5}
					myPoints={myPoints}
					startAnimationFunction={startAnimation}
					claimedPointsFunction={claimedPoints}
				/>
				{/* CLAS OHLSON */}
				<RewardPageNew
					logo={clasohlsonLogo}
					title="Clas Ohlson"
					offer="Tilbud"
					image={clasohlsonImage}
					text="Skal du fikse noe i bostanden eller kollektivet? Få 10% alt fra bygg seksjonen vår."
					value={50}
					uniqueId={6}
					myPoints={myPoints}
					startAnimationFunction={startAnimation}
					claimedPointsFunction={claimedPoints}
				/>
				<ChatBubble />
			</div>
		</div>
	);
}
