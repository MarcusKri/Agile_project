import { Link } from "react-router-dom";
import React from "react";
import atCampus from "/src/assets/img/atcampus.png";
import feide from "/src/assets/img/feide.png";

export function errorHandler() {
	return (
		<div id={"error-div"}>
			<div className="errorPage">
				<div className="atCampusLogoLogin">
					<img src={atCampus} />

					<h3>Still spørsmål anonymt.</h3>
					<h3>Få lynrask hjelp av flink medstudenter.</h3>
				</div>

				<div className="logInParent">
					<div className="loginImg">
						<img src={feide} alt="" />
					</div>

					<div className="feideH3">
						<h3>
							Feide - Felles Elektronisk IDEntitet - er kunnskapsdepartementets valgte løsning for sikker
							identifisering i utdanningsektoren
						</h3>
					</div>

					<div className="loginTxt">
						<Link to="/login" className="loginTxtLink">
							Logg inn med Feide
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default errorHandler;
