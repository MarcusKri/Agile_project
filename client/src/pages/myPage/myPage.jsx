import { faEnvelope, faHouse, faPhone, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { fetchJSON } from "../../helpers/fetchJSON";
import ChatBubble from "../chatBubble/chatBubble";
import { useLoader } from "../shared/useLoader";
import TabsCard from "./cards/tabCard";
import "./css/loginPage.css";
import "./css/mypage.css";
import "./css/tabs.css";
import avatar from "/src/assets/img/avatar.png";
import { NavBar } from "/src/components/navbar/navBar";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function MyPage({ myPoints }) {
	const { loading, data, error } = useLoader(async () => {
		return await fetchJSON("/api/login");
	});

	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}
	function preview(event) {
		var reader = new FileReader();
		reader.onload = function () {
			var output = document.getElementById("output");
			output.src = reader.result;
		};
		reader.readAsDataURL(event.target.files[0]);
	}

	if (loading) {
		return <></>;
	}

	if (error) {
		return <ErrorHandler />;
	}

	return (
		<div>
			<NavBar myPoints={myPoints} minSide="minSide" />
			<section className="myPage">
				<div className="allContent">
					<div className="profileContent">
						<article className="profileCard">
							<div className="avatar">
								<img id="output" src={avatar} alt="avatar" />
							</div>

							<div className="top">
								<div className="uploadImg">
									<label>
										<input type="file" name="image" id="file" onChange={preview} />
										<FontAwesomeIcon icon={faUpload} />
										<p> Nytt profilbilde </p>
									</label>
								</div>
								<div className="name">
									<h3>{data.name || data.pid}</h3>
									<p className="school">E-Business, Høyskolen Kristiania</p>
								</div>
							</div>

							<div className="divider" />

							<h3>PROFIL</h3>
							<div className="profileDetails">
								<div className="profileItem">
									<div className="profileIcon">
										<FontAwesomeIcon icon={faEnvelope} size="2x" />
									</div>

									<div className="profileTxt">
										<h6>E-Mail</h6>
										<h3>{data.email && <span>{data.email}</span>}</h3>
									</div>
								</div>

								<div className="profileItem">
									<div className="profileIcon">
										<FontAwesomeIcon icon={faPhone} size="2x" />
									</div>

									<div className="profileTxt">
										<h6>Phone Number</h6>
										<h3>+47 456 78 910</h3>
									</div>
								</div>
								<div className="profileItem">
									<div className="profileIcon">
										<FontAwesomeIcon icon={faHouse} size="2x" />
									</div>

									<div className="profileTxt">
										<h6>Adress</h6>
										<h3>Kalfarlien 74c, 5036 Bergen</h3>
									</div>
								</div>
							</div>
						</article>
					</div>
					<div className="myPageContents">
						<TabsCard />
						<ChatBubble />
					</div>
				</div>
			</section>
		</div>
	);
}
