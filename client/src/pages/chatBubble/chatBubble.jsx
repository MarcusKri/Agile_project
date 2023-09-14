import { faChevronLeft, faMessage, faPaperPlane, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chatBubble.css";
import person from "/src/assets/images/person.jpg";

export default function ChatBubbler() {
	function displayChat() {
		const bubble = document.getElementById("chatBubble");
		const chat = document.getElementById("chatWindow");

		chat.classList.add("showElement");
		bubble.classList.add("hideElement");
		bubble.classList.remove("showElement");
	}

	function hideChat() {
		const bubble = document.getElementById("chatBubble");
		const chat = document.getElementById("chatWindow");

		bubble.classList.add("showElement");
		chat.classList.add("hideElement");
		chat.classList.remove("showElement");
	}

	return (
		<div>
			<div className="chatBubble" onClick={displayChat} id="chatBubble">
				<FontAwesomeIcon icon={faMessage} size="2x" />
			</div>

			<div className="chatWindow" id="chatWindow">
				<div onClick={hideChat}>
					<FontAwesomeIcon icon={faXmarkCircle} />
				</div>
				<div className="chatHeader">
					<div className="chatImgParent">
						<FontAwesomeIcon icon={faChevronLeft} className="backIcon" />
						<div className="chatImg">
							<img src={person} alt="image" />
							<div className="greenCircle" />
						</div>
					</div>
					<div className="chatInfo">
						<h3>Geir Helgesen</h3>
						<h5>Pålogget</h5>
					</div>
				</div>

				<div className="chatDivider" />

				<div className="chatSection">
					<div className="chatMessages">
						<div className="leftMsg">
							<p className="reciever">Hvordan går oppgavene i bedøk?</p>
							<p className="msgTimeLeft">11:12</p>
						</div>
						<div className="rightMsg">
							<p className="sender">Har ikke helt begynt akkurat...</p>
							<p className="msgTimeRight">11:59</p>
						</div>
						<div className="leftMsg">
							<p className="reciever">Null, stress jeg hjelper deg!</p>
							<p className="msgTimeLeft">12:10</p>
						</div>
						<div className="rightMsg">
							<p className="sender">Tusen takk, møtes på skolen imorgen?</p>
							<p className="msgTimeRight">12:23</p>
						</div>
						<div className="leftMsg">
							<p className="reciever">Yes, passer 11?</p>
							<p className="msgTimeLeft">12:34</p>
						</div>
					</div>
					<div className="messageField">
						<input type="text" id="messageInput" placeholder="Skriv en melding..." />
						<div className="sendMsg">
							<FontAwesomeIcon icon={faPaperPlane} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
