import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/mypage.css";
import "../css/tabs.css";
import "../css/chatcard.css";

export default function ChatCard() {
	return (
		<article className="chatCard">
			<h3>CHAT</h3>
			<div className="chat">
				{/* EKTE CHAT MÅ LEGGES INN HER */}
				<p className="test1">
					<strong> Annonym Løve: </strong> Hallo!
				</p>
				<br />
				<p className="test2">
					<strong>Anonym Hest:</strong> Hei, hvordan går det med deg?
				</p>
				<p className="test1">
					<strong> Annonym Løve: </strong> Bare bra, har du gjort oppgavene i Smidig?
				</p>
				<br />
				<p className="test2">
					<strong>Anonym Hest:</strong> Ja ble ferdig med de i går kveld!
				</p>
			</div>
		</article>
	);
}
