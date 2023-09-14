import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../img/avatar.png";
import avatar2 from "../img/somedude.jpg";
import "../css/mypage.css";
import "../css/tabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useLoader } from "../../shared/useLoader";
import { fetchJSON } from "../../../helpers/fetchJSON";
import rotate_icon from "../../../assets/images/rotate_icon.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function NameCard() {
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
		return <div>Vennligst vent....</div>;
	}
	if (error) {
		return <div>Error! {error.toString()}</div>;
	}

	return (
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
						<FontAwesomeIcon icon={faEnvelope} size="3x" />
					</div>

					<div className="profileTxt">
						<h6>E-Mail</h6>
						<h3>{data.email && <span>{data.email}</span>}</h3>
					</div>
				</div>

				<div className="profileItem">
					<div className="profileIcon">
						<FontAwesomeIcon icon={faPhone} size="3x" />
					</div>

					<div className="profileTxt">
						<h6>Phone Number</h6>
						<h3>+47 402 12 345</h3>
					</div>
				</div>
				<div className="profileItem">
					<div className="profileIcon">
						<FontAwesomeIcon icon={faHouse} size="3x" />
					</div>

					<div className="profileTxt">
						<h6>Adress</h6>
						<h3>Kalfarlien 74c, 5036 Bergen</h3>
					</div>
				</div>
			</div>
		</article>
	);
}
