import React, { useState } from "react";
import AsideNav from "../navigation/asideNav.jsx";
import { NavBar } from "/src/components/navbar/navBar";
import "./createStudyGroup.css";
import { HeadLine } from "../../shared/headLine";
import findGroups from "/src/assets/images/headline-images/findGroups.png";
import ChatBubbler from "../../chatBubble/chatBubble";
import { Convert } from "mongo-image-converter";
import { postJSON } from "../../shared/postJSON";
import {
	FormInput,
	FormSelectCampus,
	FormSelectCourse,
	FormSelectWorkForm,
	FormSelectAnonimity,
} from "../../../components/createStudyGroup/groupFormInput";
import { Button } from "react-bootstrap";
import { useLoader } from "/src/pages/shared/useLoader";
import { fetchJSON } from "/src/helpers/fetchJSON";
import ErrorHandler from "/src/pages/shared/errorHandler";

export function CreateGroup({ myPoints }) {
	const [groupName, setGroupName] = useState("");
	const [course, setCourse] = useState("");
	const [campus, setCampus] = useState("");
	const [workForm, setWorkForm] = useState("");
	const [anonymity, setAnonymity] = useState("");
	const [imageFile, setImageFile] = useState("");

	const convertImage = async (event) => {
		try {
			const convertedImage = await Convert(imageFile);
			if (convertedImage) {
				console.log(convertedImage);
				return convertedImage;
			} else {
				console.log("The file is not in format of image/jpeg or image/png");
			}
		} catch (error) {
			console.warn(error.message);
		}
	};

	async function handleSubmit(e) {
		e.preventDefault();
		console.log("New group added to the database!");
		alert("New group added to the database!");

		const convertedImage = await convertImage();
		console.log(convertedImage);

		await postJSON("/api/groups", {
			groupName,
			course: course,
			campus: campus,
			workForm: workForm,
			anonymity: anonymity,
			imageFile: convertedImage,
		});
		setGroupName("");
		setCourse("");
		setCampus("");
		setWorkForm("");
		setAnonymity("");
		setImageFile("");
	}

	const { loading, error } = useLoader(async () => {
		return await fetchJSON("/api/login");
	});

	if (loading) {
		return <></>;
	}

	if (error) {
		return <ErrorHandler />;
	}

	return (
		<div className="mainSection">
			<NavBar myPoints={myPoints} />
			<div className="groupPageContainer">
				<AsideNav />

				<div className="mainDisplay">
					<div className="createGroupSection">
						<HeadLine headLine="OPPRETT GRUPPE" headImage={findGroups} />

						<form
							action="/"
							method="POST"
							enctype="multipart/form-data"
							onSubmit={handleSubmit}
							className={"formWrapper"}
						>
							<div className="formParent">
								<div className="formSelect">
									<FormInput className="groupName" value={groupName} setValue={setGroupName} />
								</div>
							</div>

							<div className="formParent">
								<div className="formSelect">
									<FormSelectCampus value={campus} setValue={setCampus} />
								</div>
							</div>

							<div className="formParent">
								<div className="formSelect">
									<FormSelectCourse value={course} setValue={setCourse} />
								</div>
							</div>

							<div className="formParent">
								<div className="formDescription">
									<label htmlFor="course">Velg arbeidsform</label>
								</div>
								<div className="formSelect">
									<FormSelectWorkForm value={workForm} setValue={setWorkForm} />
								</div>
							</div>

							<div className="formParent">
								<div className="formSelect">
									<FormSelectAnonimity value={anonymity} setValue={setAnonymity} />
								</div>
							</div>

							<div className="formParent">
								<div className="imgUploadParent">
									<div className="formSelect file-input" id={"inputFileDiv"}>
										<input
											id="formFile"
											className={"form-control"}
											type="file"
											onChange={(e) => setImageFile(e.target.files[0])}
										/>
									</div>
								</div>
							</div>

							<div className="btnParent">
								<Button
									disabled={
										campus.length === 0 ||
										groupName.length === 0 ||
										workForm.length === 0 ||
										anonymity.length === 0 ||
										imageFile.length === 0
									}
									type="submit"
									className="createBtn"
								>
									Opprett gruppe
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<ChatBubbler />
		</div>
	);
}
