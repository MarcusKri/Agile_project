import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import myGroups from "../../assets/images/headline-images/myGroups.png";
import ChatBubble from "../chatBubble/chatBubble";
import "../myPage/css/tabs.css";
import { HeadLine } from "../shared/headLine.jsx";
import "./listGroups.css";
import "./myGroups.css";
import AsideNav from "./navigation/asideNav.jsx";
import { NavBar } from "/src/components/navbar/navBar";
import codePicture from "/src/pages/myPage/cards/tabsContent/img/code.jpg";
import codePicture2 from "/src/pages/myPage/cards/tabsContent/img/smidig.jpeg";
import codePicture3 from "/src/pages/myPage/cards/tabsContent/img/peopleworking.jpg";
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function GroupPage({ myPoints }) {
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
		<div className="mainSection">
			<NavBar myPoints={myPoints} grupper="Grupper" />
			<div className="flex">
				<AsideNav />
				<div className={"groupPageContainer"}>
					<div className={"mainDisplayParent"}>
						<HeadLine headLine="MINE GRUPPER" headImage={myGroups} />
						<div className={"mainDisplay listGroupParent"}>
							<DummyGroupPage />
						</div>
					</div>
				</div>
			</div>
			<ChatBubble />
		</div>
	);
}

//CREATES A DUMMY GROUP PAGE WITH THE GROUPS THE USER IS CONNECTED TO

function DummyGroupPage() {
	return (
		<div className="tabsParent">
			<div className="content-tabs">
				<div className="groupsTabs">
					<div className="listGroupsParent">
						<Card className="listCard">
							<div className="cardImg">
								<Card.Img
									variant="bottom"
									src={codePicture}
									alt="Card image"
									style={{ width: "10rem" }}
									className="col"
								/>
							</div>
							<Card.Body className="listCardBody">
								<Card.Text class="d-flex flex-column" id={"cardGroups"}>
									<h3>
										<b>Navn:</b> UX meetup
									</h3>{" "}
									<b>Campus:</b> Stavanger <b>Studie:</b> Frontend <b>Arbeidsform:</b>
									Fyisk <b>Anonymitet:</b> Ikke anonym
								</Card.Text>
							</Card.Body>
							<div class="listBtnParent">
								<Nav.Link href="/chat">
									<Button type="button" variant="success" className="listBtn">
										Chat
									</Button>
								</Nav.Link>
							</div>
						</Card>
					</div>
					<div className="listGroupsParent">
						<Card className="listCard">
							<div className="cardImg">
								<Card.Img
									variant="bottom"
									src={codePicture2}
									alt="Card image"
									style={{ width: "10rem" }}
									className="col"
								/>
							</div>
							<Card.Body className="listCardBody">
								<Card.Text class="d-flex flex-column" id={"cardGroups"}>
									<h3>
										<b>Navn:</b> Vi er kodere
									</h3>{" "}
									<b>Campus:</b> Bergen <b>Studie:</b> Økonomi <b>Arbeidsform:</b>
									Digitalt <b>Anonymitet:</b> anonym
								</Card.Text>
							</Card.Body>
							<div className="listBtnParent">
								<Nav.Link href="/chat">
									<Button type="button" variant="success" className="listBtn">
										Chat
									</Button>
								</Nav.Link>
							</div>
						</Card>
					</div>
					<div className="listGroupsParent">
						<Card className="listCard">
							<div className="cardImg">
								<Card.Img
									variant="bottom"
									src={codePicture3}
									alt="Card image"
									style={{ width: "10rem" }}
									className="col"
								/>
							</div>
							<Card.Body className="listCardBody">
								<Card.Text class="d-flex flex-column" id={"cardGroups"}>
									<h3>
										<b>Navn:</b> Smidig Prosjekt
									</h3>{" "}
									<b>Campus:</b> Oslo <b>Studie:</b> Hr og Ledelse <b>Arbeidsform:</b>
									Fyisk <b>Anonymitet:</b> Ikke anonym
								</Card.Text>
							</Card.Body>
							<div className="listBtnParent">
								<Nav.Link href="/chat">
									<Button type="button" variant="success" className="listBtn">
										Chat
									</Button>
								</Nav.Link>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
