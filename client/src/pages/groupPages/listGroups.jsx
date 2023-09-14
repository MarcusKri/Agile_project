import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "./listGroups.css";

export function GroupCard({ group: { groupName, course, campus, workForm, anonymity, imageFile } }) {
	function alerMemberShip() {
		// Gives an replacement alert, further functions would be required to acturally add to group. Which we didnt have time/resources to do.
		alert("Du er nå medlem"); 
	}

	return (
		//LIST GROUPS LAYOUT
		<div className="listGroupsParent">
			<Card className="listCard">
				<div className="cardImg">
					<Card.Img
						variant="bottom"
						src={imageFile}
						alt="Card image"
						style={{ width: "10rem" }}
						className="col"
					/>
				</div>
				<Card.Body className="listCardBody">
					<Card.Text class="d-flex flex-column" id={"cardGroups"}>
						<h3>
							<b>Navn:</b> {groupName}{" "}
						</h3>{" "}
						<b>Campus:</b> {campus} <b>Studie:</b> {course} <b>Arbeidsform:</b>
						{workForm} <b>Anonymitet:</b> {anonymity}
					</Card.Text>
				</Card.Body>
				<div class="listBtnParent">
					<Button type="button" variant="success" className="listBtn" onClick={alerMemberShip}>
						Bli medlem
					</Button>
				</div>
			</Card>
		</div>
	);
}
