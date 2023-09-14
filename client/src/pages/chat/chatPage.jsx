import React from "react";
import "./chatPage.css";
import AsideNav from "../groupPages/navigation/asideNav";
import { HeadLine } from "../shared/headLine";
import myGroups from "../../assets/images/headline-images/myGroups.png";
import { NavBar } from "../../components/navbar/navBar";
import { MyChatPage } from "./myChatPage";
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function ChatPage({ myPoints }) {
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
			<NavBar myPoints={myPoints} chat="Chat" />
			<div className="chatMainParent">
				<AsideNav />
				<div className="mainDisplayParent">
					<HeadLine headLine="MIN CHAT" headImage={myGroups} />
					<div className="mainDisplay">
						<div className="listGroupParent">
							<MyChatPage />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
