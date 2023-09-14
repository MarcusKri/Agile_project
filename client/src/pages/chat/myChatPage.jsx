import React, { useState } from "react";
import { Chat } from "./chat";
import { AnonymChat } from "./anonymChat";

export function MyChatPage() {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className="tabsParent">
			<div className="bloc-tabs">
				<button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
					Mine samtaler
				</button>

				<button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
					Mine anonyme samtaler
				</button>
			</div>

			<div className="content-tabs">
				<div className={toggleState === 1 ? "content  active-content" : "content"}>
					<div className="mainDisplay chatDisplay">
						<Chat />
					</div>
				</div>

				<div className={toggleState === 2 ? "content  active-content" : "content"}>

					<div className="mainDisplay chatDisplay">
						<AnonymChat />
					</div>
				</div>
			</div>
		</div>
	);
}
