import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { groupReducerActions } from "./app.const";
import { fetchJSON } from "./helpers/fetchJSON";
import { ChatPage } from "./pages/chat/chatPage";
import { FrontPage } from "./pages/frontPage/frontPage";
import { FindGroups } from "./pages/groupPages/groupSorting/findGroups";
import { GroupPage } from "./pages/groupPages/myGroupDummyPage";
import { Login, LoginCallback } from "./pages/login";
import { AboutMissions } from "./pages/missionPage/aboutMissions";
import { Missions } from "./pages/missionPage/missions";
import { MyPage } from "./pages/myPage/myPage";
import { RewardsPage } from "./pages/rewardPage/rewardsPage";
import { PageNotFound } from "./pages/shared/404/pageNotFound";
import { useLoader } from "./pages/shared/useLoader";
import { store } from "./redux/store";
import { LoginContext } from "/src/contexts/login.context.jsx";
import { CreateGroup } from "/src/pages/groupPages/createStudyGroup/createStudyGroup.jsx";

export function Application() {
	const { data, loading, error } = useLoader(() => fetchJSON("/api/config"));

	const [myPoints, setMyPoints] = useState(0);
	console.log("my points are", myPoints);

	useEffect(async () => {
		const groups = await fetchJSON("/api/groups");
		store.dispatch({
			type: groupReducerActions.SET_GROUPS,
			payload: groups,
		});
	}, []);

	if (loading) {
		return (
			<div>
				<h1></h1>
			</div>
		);
	}

	if (error) {
		return (
			<>
				<h1>Error</h1>
				<div>{error.toString()}</div>
			</>
		);
	}

	const { discovery_endpoint, client_id, scope } = data;

	return (
		<LoginContext.Provider value={{ discovery_endpoint, client_id, scope }}>
			<ReduxProvider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path={"/"} element={<FrontPage />} />
						<Route path={"/login"} element={<Login />} />
						<Route path={"*"} element={<PageNotFound />} />
						<Route
							path={"/rewards-page"}
							element={<RewardsPage myPoints={myPoints} setMyPoints={setMyPoints} />}
						/>
						<Route path={"/myGroupPage"} element={<GroupPage myPoints={myPoints} />} />
						<Route path={"/login/callback"} element={<LoginCallback myPoints={myPoints} />} />
						<Route path={"/chat"} element={<ChatPage myPoints={myPoints} />} />
						<Route
							path={"/missions"}
							element={<Missions myPoints={myPoints} setMyPoints={setMyPoints} />}
						/>
						<Route path={"/mypage"} element={<MyPage myPoints={myPoints} />} />
						<Route path={"/findGroup"} element={<FindGroups myPoints={myPoints} />} />
						<Route path={"/aboutMissions"} element={<AboutMissions myPoints={myPoints} />} />
						<Route path={"/createGroup"} element={<CreateGroup myPoints={myPoints} />} />
					</Routes>
				</BrowserRouter>
			</ReduxProvider>
		</LoginContext.Provider>
	);
}
