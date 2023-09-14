import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Nav } from "react-bootstrap";
import "../myGroups.css";

export function Navigation() {
	return (
		<div className="container-fluid h-100" id="greenBackgorund">
			<div className="row">
				<h1 class="text-white">Grupper</h1>
			</div>
			<div class="row">
				<Nav variant="pills" className={"buttonContainer"}>
					<Nav.Item class="col">
						<Nav.Link href="/myGroupPage">
							<Button type="button" variant="success">
								Mine Grupper
							</Button>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item class="col">
						<Nav.Link href="/findGroup">
							<Button type="button" variant="success">
								Finn Grupper
							</Button>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item class="col">
						<Nav.Link href="/chat">
							<Button type="button" variant="success">
								Gruppe chat
							</Button>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		</div>
	);
}
