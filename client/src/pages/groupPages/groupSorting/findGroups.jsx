import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import findGroups from "../../../assets/images/headline-images/findGroups.png";
import ChatBubble from "../../chatBubble/chatBubble";
import { HeadLine } from "../../shared/headLine.jsx";
import { GroupCard } from "../listGroups";
import "../navigation/asideNav.css";
import AsideNav from "../navigation/asideNav.jsx";
import { NavBar } from "/src/components/navbar/navBar.jsx";
import { defaultValues } from "/src/app.const.js";
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

const filtersFetcher = (state) => state.filters;
const groupsFetcher = (state) => state.groups.studyGroups;

function getFilterFunction(compareCategory, compareValue, acceptAll) {
	if (acceptAll) return () => true;
	return (group) => !!group[compareCategory] && group[compareCategory].toLowerCase() === compareValue.toLowerCase();
}

function filterGroupCategories(groups, filters) {
	return groups.filter((group) => filters.every((filter) => filter(group)));
}

function FilterSelectedOptions() {
	const { course, campus, attendance, anonymity } = useSelector(filtersFetcher);
	console.log({ course, campus, attendance, anonymity });
	const groups = useSelector(groupsFetcher);

	const returnAllElements = {
		course: course === "" || course === defaultValues.course,
		campus: campus === "" || campus === defaultValues.campus,
		attendance: attendance === "" || attendance === defaultValues.attendance,
		anonymity: anonymity === "" || anonymity === defaultValues.anonymity,
	};

	console.log(groups);

	const courseFilter = getFilterFunction("course", course, returnAllElements.course);
	const campusFilter = getFilterFunction("campus", campus, returnAllElements.campus);
	const attendanceFilter = getFilterFunction("workForm", attendance, returnAllElements.attendance);
	const anonymityFilter = getFilterFunction("anonymity", anonymity, returnAllElements.anonymity);

	const allFilters = [courseFilter, campusFilter, attendanceFilter, anonymityFilter];

	if (!!groups) {
		const validGroups = filterGroupCategories(groups, allFilters);
		return (
			<div style={{ width: "100%" }} id="gruppeID">
				{validGroups.map((group) => {
					return <GroupCard key={uuidv4()} group={group} />;
				})}
			</div>
		);
	}
}

export function FindGroups({ myPoints }) {
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

			<div className="groupPageContainer">
				<AsideNav />
				<div className="mainDisplayParent">
					<HeadLine headLine="FINN GRUPPER" headImage={findGroups} />
					<div className="mainDisplay">
						<FilterSelectedOptions />
					</div>
				</div>
			</div>

			<ChatBubble />
		</div>
	);
}
