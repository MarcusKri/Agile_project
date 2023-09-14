//IMPORT

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/rewardsPage.css";
import { Card, CardGroup } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import ImageNotFound from "../../../assets/images/rewards-images/notfound.png";
import QRCode from "qrcode";

export default function RewardPageNew(props) {
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

	function showCard() {
		const qrCode = document.getElementsByClassName("qrCode")[props.uniqueId - 1];
		const allContent = document.getElementsByClassName("rewardCard")[props.uniqueId - 1];

		qrCode.classList.add("hideRewardCard");
		qrCode.classList.remove("show");

		allContent.classList.add("hideRewardCard");
		allContent.classList.remove("show");

		qrCode.disabled = true;
		allContent.disabled = true;
	}

	function DiamondIcon() {
		return (
			<div class="diamondParent">
				<FontAwesomeIcon icon={faGem} id="diamond" />
			</div>
		);
	}
	return (
		<Card className="rewardCard show" id={props.uniqueId}>
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

				{/* IMAGE */}
				<div className="rewardImage">
					<img
						src={props.image}
						onError={({ target }) => {
							target.onerror = null; // prevents looping
							target.src = { ImageNotFound };
						}}
					/>
				</div>

				{/* TEXT */}
				<div className="textField">
					<p>{props.text}</p>
				</div>

				{/* BUTTON KJØP*/}
				<div>
					<button
						id="rewardBtn"
						class="bg-success align-items-center"
						value={props.value}
						onClick={() => rewardBtn()}
					>
						<div className="p-2">Kjøp</div>
						<DiamondIcon />
						<div className="p-2">{props.value}</div>
					</button>
				</div>
			</div>

			{/* QR CODE */}
			<div className="qrCode">
				<h3>Din QR-Kode</h3>
				<div className="qrDiv">
					<canvas id={qr} />
				</div>
				<button className="showCardBtn" onClick={() => showCard()}>
					QR-kode aktivert. Klikk for å fjerne
				</button>
			</div>
		</Card>
	);
}
