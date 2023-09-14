import React from "react";

export function AnonymChat() {
	return (
		<div className="chatParent">
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
			<link rel="stylesheet" href="../../css/chatPage.css" />
			<div className="container row clearfix card chat-app col-lg-12">
				<div id="plist" className="people-list">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Søk..." />
						<div className="input-group-prepend">
							<span className="input-group-text">
								<i className="fa fa-search" />
							</span>
						</div>
					</div>
					<ul className="list-unstyled chat-list mt-2 mb-0">
						<li className="clearfix">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Aonyme gruppa 2</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle offline" /> Aktiv for 5 timer siden{" "}
								</div>
							</div>
						</li>
						<li className="clearfix active">
							<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
							<div className="about">
								<div className="name">Gjengen</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>

						<li className="clearfix">
							<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
							<div className="about">
								<div className="name">Beste gruppa</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>
						<li className="clearfix">
							<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
							<div className="about">
								<div className="name">Pizza gang 123</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>
						<li className="clearfix">
							<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
							<div className="about">
								<div className="name">Hvem er vi?</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle offline" /> Aktiv for 21 år siden{" "}
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="chat">
					<div className="chat-header clearfix">
						<div className="row">
							<div className="col-lg-6">
								<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
									<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
								</a>
								<div className="chat-about">
									<h6 className="m-b-0">Gruppe 4</h6>
									<small>Sist sett: 2 minutter siden</small>
								</div>
							</div>
							<div className="col-lg-6 hidden-sm">
								<a href="javascript:void(0);" className="btn btn-outline-secondary">
									<i className="fa fa-camera" />
								</a>
								<a href="javascript:void(0);" className="btn btn-outline-primary">
									<i className="fa fa-image" />
								</a>
								<a href="javascript:void(0);" className="btn btn-outline-info">
									<i className="fa fa-cogs" />
								</a>
								<a href="javascript:void(0);" className="btn btn-outline-warning">
									<i className="fa fa-question" />
								</a>
							</div>
						</div>
					</div>
					<div className="chat-history">
						<ul className="m-b-0">
							<li className="clearfix">
								<div className="message-data">
									<span className="message-data-right">21:19, Idag</span>
								</div>
								<div className="message other-message"> Noen som vet hvordan man gjør oppgave 2? </div>
							</li>
							<li className="clearfix">
								<div className="message-data adjust-position">
									<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
									<span className="message-data-time">22:21 , Idag</span>
								</div>
								<div className="message my-message">Ja, kan sende deg en video på den!</div>
							</li>
							<li className="clearfix">
								<div className="message-data adjust-position">
									<img src="https://img.gfx.no/2697/2697025/anonymous.jpg" alt="avatar" />
									<span className="message-data-time">23:19, Idag</span>
								</div>
								<div className="message my-message">Fikk det til! Tusen takk sjef!</div>
							</li>
						</ul>
					</div>
					<div className="chat-message clearfix">
						<div className="input-group mb-0">
							<input type="text" className="form-control" placeholder="Skriv melding her..." />
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-send" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
