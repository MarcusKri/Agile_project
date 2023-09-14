//IMPORT
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/rewardsPage.css";
import { Card } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qrImage from "../../../assets/rewardPageImages/qr.png"

export default function RewardPageUsed(props) {
	let qr = "Qr" + props.uniqueId;
	function generateQR() {
		console.log(props.myPoints, props.value);
		let str = "QrCode!!";
		QRCode.toCanvas(document.getElementById(qr), str, function (error) {
			if (error) console.error(error);
			else console.log("success!");
		});
	}

	const claimPoints = () => {
		props.claimedPointsFunction(props.value);
	};

	const flipCard = () => {
		const qrCode = document.getElementsByClassName("qrCode")[props.uniqueId - 1];
		const allContent = document.getElementsByClassName("rewardCardContent")[props.uniqueId - 1];

		allContent.classList.add("hideRewardCard");
		allContent.classList.remove("show");

		qrCode.classList.add("show");
		qrCode.classList.remove("hideRewardCard");
	};

	const rewardBtn = (e) => {
		const changeAnimationValue = () => {
			props.startAnimationFunction();
		};

		if (props.myPoints >= props.value) {
			generateQR();
			flipCard();
			claimPoints();
		} else {
			changeAnimationValue();
		}
	};



	
	return (
		<Card className="rewardUsed">
			{/* TITLE */}
			<div className="rewardCardContent">
				<div className="titleHeader">
					<div className="logoImg">
						<img src={props.logo} alt={props.alt} />
					</div>
					<div className="titleOffer">
						<h3 className="rewardTitle">{props.title}</h3>
						<h5 className="offerType">{props.offer}</h5>
					</div>
				</div>



				{/* TEXT */}
				<div className="textField">
					<p>{props.text}</p>
				</div>


				{/* QR CODE */}
				<div className="qrWrapper">
					<img src={qrImage} className="qrImage"/>
				</div>
				
			</div>

			
		</Card>
	);
}
