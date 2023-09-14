import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Nav } from "react-bootstrap";
import "../myGroups.css";
import { FilterSelectedGroups } from "./filterSelectedGroups";

function filter() {
	return alert("hei");
}

export function NavigationBarFindGroup() {
	return (
		<div className="container-fluid h-100 " id="greenBackgorund">
			<div class="row align-items-center">
				<div class="col">
					<h1 class="text-white d-flex justify-content-start">Finn gruppe</h1>
				</div>
				<div class="col">
					<Nav.Link href="/createGroup">
						<Button
							type="button"
							variant="success"
							class="col d-flex align-items-center justify-content-start"
						>
							Opprett gruppe
						</Button>
					</Nav.Link>
				</div>
			</div>

			<div class="row">
				<Nav variant="pills" className={"buttonContainer"}>
					<Nav.Item class="col">
						<Nav.Link href="/myGroupPage">
							<Button type="button" variant="success">
								Mine grupper
							</Button>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item class="col">
						<Nav.Link href="/findGroup">
							<Button type="button" variant="success" onClick={filter}>
								Finn grupper
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
					<FilterSelectedGroups />
				</Nav>
			</div>
		</div>
	);
}
