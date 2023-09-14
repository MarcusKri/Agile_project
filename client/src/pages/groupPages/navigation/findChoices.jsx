import { faBook, faSchool, faUserGroup, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./asideNav.css";
import { defaultValues, filterReducerActions } from "/src/app.const";

export default function FindChoices() {
	const [campus, setCampus] = useState("");
	const [course, setCourse] = useState("");
	const [attendance, setAttendance] = useState("");
	const [anonymity, setAnonymity] = useState("");

	const dispatch = useDispatch();

	const updateCourse = useCallback((e) => {
		const { value } = e.target;
		setCourse(value);
	});

	const updateCampus = useCallback((e) => {
		const { value } = e.target;
		setCampus(value);
	});

	const updateAttendance = useCallback((e) => {
		const { value } = e.target;
		setAttendance(value);
	});

	const updateAnonymity = useCallback((e) => {
		const { value } = e.target;
		setAnonymity(value);
	});

	async function updateGroupFilter() {
		dispatch({
			type: filterReducerActions.SET_FILTER,
			payload: {
				campus: campus,
				course: course,
				attendance: attendance,
				anonymity: anonymity,
			},
		});
	}

	return (
		<div className="chatPageContainer">
			<div className="choicesParent">
				<div className="choicesHeader">
					<div>
						<FontAwesomeIcon icon={faBook} />
						<option>Studie</option>
					</div>
				</div>
				<div className="choices">
					<Form.Control
						as="select"
						value={course}
						onChange={updateCourse}
						aria-label="Default select example"
						class="sm-3"
					>
						<option>{defaultValues.course}</option>
						<option value="Frontend og Mobilutvikling">Frontend og Mobilutvikling</option>
						<option value="Hr og Ledelse">Hr og Ledelse</option>
						<option value="Økonomi">Økonomi</option>
						<option value="Sykepleie">Sykepleie</option>
						<option value="Interiørdesign">Interiørdesign</option>
						<option value="Markedsføring">Markedsføring</option>
					</Form.Control>
				</div>
			</div>

			<div className="horizontalRule" />

			<div className="choicesParent">
				<div className="choicesHeader">
					<div>
						<FontAwesomeIcon icon={faUserGroup} />
						<option>Oppmøte</option>
					</div>
				</div>
				<div className="choices">
					<Form.Control
						as="select"
						value={attendance}
						onChange={updateAttendance}
						aria-label="Default select example"
						class="sm-3"
					>
						<option>{defaultValues.attendance}</option>
						<option>Fysisk</option>
						<option>Digitalt</option>
					</Form.Control>
				</div>
			</div>

			<div className="horizontalRule" />

			<div className="choicesParent">
				<div className="choicesHeader">
					<div>
						<FontAwesomeIcon icon={faSchool} />
						<option>Campus</option>
					</div>
				</div>
				<div className="choices">
					<Form.Control
						as="select"
						value={campus}
						onChange={updateCampus}
						aria-label="Default select example"
						class="sm-3"
					>
						<option>{defaultValues.campus}</option>
						<option value="Bergen">Bergen</option>
						<option value="Oslo">Oslo</option>
						<option value="Trondheim">Trondheim</option>
						<option value="Stavanger">Stavanger</option>
						<option value="Kristiansand">Kristiansand</option>
						<option value="Tromsø">Tromsø</option>
					</Form.Control>
				</div>
			</div>
			<div className="choicesParent">
				<div className="choicesHeader">
					<div>
						<FontAwesomeIcon icon={faUserSecret} />
						<option>Anonymity</option>
					</div>
				</div>
				<div className="choices">
					<Form.Control
						as="select"
						value={anonymity}
						onChange={updateAnonymity}
						aria-label="Default select example"
						class="sm-3"
					>
						<option>{defaultValues.anonymity}</option>
						<option value="Anonym">Anonym</option>
					</Form.Control>
				</div>
			</div>

			<div>
				<button className="findGroupsBtn" onClick={updateGroupFilter}>
					Finn Grupper
				</button>
			</div>
		</div>
	);
}
