import React from "react";
import { Button, Form } from "react-bootstrap";

export function FilterSelectedGroups() {
	return (
		<div class="container-fluid h-100 d-flex justify-content-around">
			<div class="row ">
				<div class="col">
					<Form.Control
						as="select"
						value={course}
						onChange={(e) => {
							setCourse(e.target.value);
						}}
						aria-label="Default select example"
						class="sm-3"
					>
						<option>Studie</option>
						<option value="Frontend og Mobilutvikling">Frontend og Mobilutvikling</option>
						<option value="Hr og Ledelse">Hr og Ledelse</option>
						<option value="Økonomi">Økonomi</option>
						<option value="Sykepleier">Sykepleier</option>
					</Form.Control>
				</div>
				<div class="col">
					<Form.Select aria-label="Default select example" class="sm-3">
						<option>Fysisk eller Digitalt</option>
						<option value="1">Fysisk</option>
						<option value="2">Digitalt</option>
					</Form.Select>
				</div>

				<div class="col">
					<Form.Control
						as="select"
						value={campus}
						onChange={(e) => {
							setCampus(e.target.value);
						}}
						aria-label="Default select example"
						class="sm-3"
					>
						<option>Campus</option>
						<option value="Bergen">Bergen</option>
						<option value="Oslo">Oslo</option>
						<option value="Trondheim">Trondheim</option>
						<option value="Stavanger">Stavanger</option>
						<option value="Kristiansand">Kristiansand</option>
						<option value="Tromsø">Kristiansand</option>
					</Form.Control>
				</div>
				<div class="col">
					<Button type="button" class="col d-flex justify-content-start" variant="danger">
						Søk i grupper
					</Button>
				</div>
			</div>
		</div>
	);
}
