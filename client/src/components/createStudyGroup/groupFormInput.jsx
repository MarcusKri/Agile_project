import React, { useCallback } from "react";
import { Form } from "react-bootstrap";


export function FormInput({ label, value, setValue }) {
	return (
		<div>
			<label>{label}</label>

			<input
				className="centerSelect"
				placeholder="Skriv inn ditt gruppenavn..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}

export function FormInputPicture({ value, setValue }) {
	return (
		<div>
			<Form.Control type="file" onChange={(event) => setValue(event.target.value)} />
		</div>
	);
}

function BasicFormStructure({ arrayToMap, label, setValue }) {
	const changeValue = useCallback((e) => setValue(e.target.value));

	return (
		<div>
			<label>{label}</label>
			<select className="centerSelect" onChange={changeValue}>
				{arrayToMap.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	);
}

const optionsCourse = [
	{ value: "Ikke valgt", label: "Velg ditt studie" },
	{ value: "frontend og mobilutvikling", label: "frontend og mobilutvikling" },
	{ value: "Økonomi", label: "Økonomi" },
	{ value: "Hr og ledelse", label: "Hr og ledelse" },
	{ value: "Sykepleie", label: "Sykepleie" },
	{ value: "Interiørdesign", label: "Interiørdesign" },
	{ value: "Markedsføring", label: "Markedsføring" },
];

export function FormSelectCourse({ label, setValue }) {
	return <BasicFormStructure arrayToMap={optionsCourse} label={label} setValue={setValue} />;
}

const optionsCampus = [
	{ value: "Ikke valgt", label: "Velg ditt Campus" },
	{ value: "Oslo", label: "Oslo" },
	{ value: "Bergen", label: "Bergen" },
	{ value: "Stavanger", label: "Stavanger" },
	{ value: "Trondheim", label: "Trondheim" },
	{ value: "Kristiansand", label: "Kristiansand" },
	{ value: "Tromsø", label: "Tromsø" },
];

export function FormSelectCampus({ label, setValue }) {
	return <BasicFormStructure arrayToMap={optionsCampus} label={label} setValue={setValue} />;
}

const optionsWorkForm = [
	{ value: "Ikke valgt", label: "Velg arbeidsform" },
	{ value: "Fysisk", label: "Fysisk" },
	{ value: "Digitalt", label: "Digitalt" },
];

export function FormSelectWorkForm({ label, setValue }) {
	return <BasicFormStructure arrayToMap={optionsWorkForm} label={label} setValue={setValue} />;
}

const optionsAnonimity = [
	{ value: "Ikke valgt", label: "Velg anonymitet" },
	{ value: "Ikke anonym", label: "Ikke anonym" },
	{ value: "Anonym", label: "Anonym" },
];

export function FormSelectAnonimity({ label, setValue }) {
	return <BasicFormStructure arrayToMap={optionsAnonimity} label={label} setValue={setValue} />;
}
