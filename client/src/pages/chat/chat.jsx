import React from "react";

export function Chat() {
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
								src="https://lexfridman.com/wordpress/wp-content/uploads/powerpress/artwork_3000-230.png"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Gruppe 2</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle offline" /> Aktiv for 1 min siden{" "}
								</div>
							</div>
						</li>
						<li className="clearfix active">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnD8socId8iPT0br4K-5fPOf9pnAYESt9wtlSToZ27YUmIm-6i7ub2iXiLDkCsls3tZE&usqp=CAU"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Gruppe 4</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>
						<li className="clearfix">
							<img
								src="http://store-images.s-microsoft.com/image/apps.9024.13510798887182917.9e9823dd-1c37-4e3d-8dbe-f957be75eaeb.0ba0a2b6-fc07-4920-836f-cd87eccafa79"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Koderne</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>
						<li className="clearfix">
							<img
								src="https://images.squarespace-cdn.com/content/v1/58b7d6103a04118819147ea2/1488448795412-30D7JX5UYJHZOVF6CPYT/codeimg.png"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Beste gruppa</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>
						<li className="clearfix">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlP33NEf-FdipwVoxN4gbfBwJxvhIlGTByQ&usqp=CAU"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Pizza gang 123</div>
								<div className="status">
									{" "}
									<i className="fa fa-circle online" /> Pålogget{" "}
								</div>
							</div>
						</li>
						<li className="clearfix">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TDR6Rk5N83Khx-ZRzX5375ZzCx9ao0vcUQ&usqp=CAU"
								alt="avatar"
							/>
							<div className="about">
								<div className="name">Interiørdesignerne</div>
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
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnD8socId8iPT0br4K-5fPOf9pnAYESt9wtlSToZ27YUmIm-6i7ub2iXiLDkCsls3tZE&usqp=CAU"
										alt="avatar"
									/>
								</a>
								<div className="chat-about">
									<h6 className="m-b-0">Gruppe 4</h6>
									<small>Sist sett: 2 timer siden</small>
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
									<span className="message-data-right">10:10, Idag</span>
								</div>
								<div className="message other-message">
									{" "}
									Halla gjengen! Skjer? Hvordan går det med prosjektet?{" "}
								</div>
							</li>
							<li className="clearfix">
								<div className="message-data adjust-position">
									<img src="https://i.pravatar.cc/150?img=12" alt="avatar" />
									<span className="message-data-time">10:12 , Idag</span>
								</div>
								<div className="message my-message">Skulle vi møtes i dag?</div>
							</li>
							<li className="clearfix">
								<div className="message-data adjust-position">
									<img src="https://i.pravatar.cc/400?img=59" alt="avatar" />
									<span className="message-data-time">10:15, Idag</span>
								</div>
								<div className="message my-message">
									Vi har fått tilbake vurdering på eksamen. Ligger ute på wiseflow
								</div>
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
