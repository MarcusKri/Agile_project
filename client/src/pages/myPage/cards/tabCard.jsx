import { useState } from "react";
import "../css/tabs.css";
import GroupsTab from "./tabsContent/myPageGroups";
import peopleworking from "./tabsContent/img/peopleworking.jpg"
import coding from "./tabsContent/img/code.jpg"
import smidig from "./tabsContent/img/smidig.jpeg"
import person1 from "./tabsContent/img/person1.jpg"
import person2 from "./tabsContent/img/person2.jpg"
import person3 from "./tabsContent/img/person3.jpg"
import person4 from "./tabsContent/img/person4.jpg"
import person5 from "./tabsContent/img/person5.jpg"
import person6 from "./tabsContent/img/person6.jpg"
import RewardPageUsed from "../../rewardPage/cards/RewardPageUsed";
import arkLogo from "../../../assets/rewardPageImages/arkLogo.jpg";
import levisLogo from "../../../assets/rewardPageImages/levisLogo.png";
function Tabs() {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className="tabsParent">
			<div className="bloc-tabs">
				<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
					{" "}
					Mine Grupper{" "}
				</button>

				<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
					{" "}
					Kuponger{" "}
				</button>
			</div>

			<div className="content-tabs">
				<div className={toggleState === 1 ? "content  active-content" : "content"}>
					<h3>Mine Grupper</h3>
					<hr />

					<div className="groupsAmount">
						<h4>Du har 3 grupper</h4>
					</div>

					<div className="groupsTabs">
						<GroupsTab 
						groupImg={peopleworking}
						groupParticipant1={person1}
						groupParticipant2={person2}
						groupParticipant3={person3}
						header="UX Meetup"
						members="20"
						/>
						<GroupsTab 
						groupImg={coding}
						groupParticipant1={person4}
						groupParticipant2={person3}
						groupParticipant3={person6}
						header="Vi er kodere"
						members="18"
						/>
						<GroupsTab 
						groupImg={smidig}
						groupParticipant1={person2}
						groupParticipant2={person5}
						groupParticipant3={person6}
						header="Smidig Prosjekt"
						members="8"
						/>
					</div>
				</div>

			

				<div className={toggleState === 2 ? "content  active-content" : "content"}>
					<h3>Mine kuponger</h3>
					<div id="rewardTabs">
					<RewardPageUsed
					logo={arkLogo}
					title="Ark Bokhandel"
					text="Kjøp en få en tilbud hos bokforhandleren Ark, få den billigste boken gratis."/>
				
					<RewardPageUsed
					logo={levisLogo}
					title="Levi's Jeans"
					text="Få 10% på alle bukser og skjorter hos Levis"/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tabs;
