import "../../css/shared/headLine.css";

export function HeadLine(props) {
	return (
		<div id="wrapperWrapper">
		<div id="headLineWrapper" class>
			<h3 class="text">{props.headLine}</h3>
			<div id="fancyHead">
				<div></div>
				<img src={props.headImage} />
			</div>
		</div>
		</div>
	);
}
