import "./css/tabsGroups.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";


export default function GroupsTab(props){
    return(
        <div className="groupsTabCard">

            <div className="verticalDots">
                <FontAwesomeIcon icon={faEllipsisV} className="ellipsisV" />
            </div>

            <div className="groupImgParent">
                <div className="groupImg">
                    <img src={props.groupImg} alt="img" />
                </div>
            </div>

            <div className="groupsTxt">
                <h3>{props.header}</h3>
                <h5>{props.members} medlemmer</h5>
            </div>

            <div className="participantsPositioning">
                <div className="participantsParent">
                    <div className="participantImg participant1">
                        <img src={props.groupParticipant1} alt="img" className="" />
                    </div>
                    <div className="participantImg participant2">
                        <img src={props.groupParticipant2} alt="img" className="" />
                    </div>
                    <div className="participantImg participant3">
                        <img src={props.groupParticipant3} alt="img" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}