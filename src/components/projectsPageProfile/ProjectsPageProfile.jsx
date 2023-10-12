import { getProjectById } from "../../actions/Projects"
import "./ProjectsPageProfile.scss"
import { Link } from "react-router-dom"

function ProjectsPageProfile(props) {
    return (
        <div className="projectspageprofile">
            <div className="ppp1__container">
                <div className="ppp1__top">
                    <div className="ppp1__top-row">
                        <div className="ppp1__top-avatar">
                            <img src={props.avatar} alt="#" className="ppp1__avatar-img" />
                        </div>
                        <div className="ppp1__top-title">{props.title}</div>
                    </div>
                </div>
                <div className="ppp1__goal"> <span className="ppp1__goal-span">Цель:</span> {props.goal}</div>
                <div className="ppp1__creator"><span className="ppp1__creator-span">Создатель:</span> {props.creator}</div>
                <div className="ppp1__buttons">
                    <div className="ppp1__buttons-row">
                        {/* <button className="ppp1__buttons-submit">Подать заявку</button> */}
                        <Link to={'/project-info/' + props.id} className="link__button">
                            <button className="ppp1__buttons-details" onClick={() => getProjectById(props.id)}>Подробнее</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ProjectsPageProfile}
