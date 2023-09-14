import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/shared/missions-pointsNavigation/missionsNavigation.css";
import { Link } from "react-router-dom";

export function MissionsNavigation() {
	return (
		<div id="missionsNav">
			<div>
				<Link to={"/"} id="RemoveStyle" className="navigationLinks underline active">
					Kuponger
				</Link>
			</div>
			<div>
				<Link to={"/"} id="RemoveStyle" className="navigationLinks">
					Mine Kuponger
				</Link>
			</div>
			<div>
				<Link to={"/missions"} id="RemoveStyle" className="navigationLinks ">
					Oppdrag
				</Link>
			</div>
		</div>
	);
}
