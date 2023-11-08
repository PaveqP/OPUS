import { getInfoAboutUserById } from "../../actions/User"
import "./PortfolioPageProfile.scss"
import { Link } from "react-router-dom"

function PortfolioPageProfile(props) {
    return (
        <div className="portfoliopageprofile">
            <div className="ppp__container">
                <div className="ppp__column">
                    <div className="ppp__header">
                        <div className="ppp__header-row">
                            <div className="ppp__avatar">
                                <img className="ppp__avatar-img" src={props.avatar} alt="#" style={{'height': '100px'}}/>
                            </div>
                            <div className="ppp__right">
                                <div className="ppp__nameandsurname">{props.name} {props.surname}</div>
                                <div className="ppp__skill">{props.skill}</div>
                            </div>
                        </div>
                    </div>
                    <div className="ppp__main">
                        <div className="ppp__main-age">{props.age}</div>
                        <div className="ppp__main-city">{props.city}</div>
                        <div className="ppp__main-description">{props.description}</div>
                    </div>
                    <div className="ppp__footer">
                        <Link to={`/user/` + props.id}>
                            <button className="ppp__footer-button" onClick={() => getInfoAboutUserById(props.id)}>
                                Смотреть профиль
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {PortfolioPageProfile}
