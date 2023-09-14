import { useNavigate } from "react-router-dom";
import "./pageNotFound.css";
import happy from "/src/assets/404img/happy.png";

export function PageNotFound() {
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate("/");
	}
	return (
		<form onClick={handleSubmit} className="backBtnForm">
			<div className="errorParent">
				<div className="errorSection">
					<div className="errorContent">
						<button className="backBtn" backBtnForm="backBtnForm">
							Gå til forsiden
						</button>

						<div>
							<h1>404 ERROR</h1>
							<h4>Ooops...</h4>
							<h3>Her var det visst ingenting...</h3>
						</div>
					</div>

					<div className="errorImage">
						<img src={happy} alt="img" />
					</div>
				</div>
			</div>
		</form>
	);
}
