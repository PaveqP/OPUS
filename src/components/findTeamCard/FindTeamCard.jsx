import { useSelector } from "react-redux"
import { getProjectById } from "../../actions/Projects"
import "./FindTeamCard.scss"
import { Link } from "react-router-dom"

function FindTeamCard(props) {

    const auth = useSelector(state => state.user.isAuth)
    
    return (
        <div className="findteamcard">
            <div className="ftc__container">
                <div className="ftc__top">
                    <div className="ftc__top-row">
                        <div className="ftc__top-avatar">
                            <img src={props.avatar} alt="#" className="ftc__avatar-img" />
                        </div>
                        <div className="ftc__top-right">
                            <div className="ftc__right-title">{props.title}</div>
                            <div className="ftc__right-filtres">
                                {/* <div className="ftc__filtres-row">
                                    <div className="ftc__filtres-specialization">{props.specialization}</div>
                                    <div className="ftc__filtres-money">{props.money}</div>
                                </div> */}
                            </div>
                            {/* <div className="ftc__right-wanted">
                                <div className="ftc__wanted-title">В команду нужны:</div>
                                <div className="ftc__wanted-1">{props.wanted1}</div>
                                <div className="ftc__wanted-2">{props.wanted2}</div>
                                <div className="ftc__wanted-3">{props.wanted3}</div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="ftc__goal">
                    <div className="ftc__goal-text">Цель проекта:<span className="ftc__goal-span">{props.goal}</span></div>
                </div>
                <div className="ftc__join">
                    {auth ?
                        <Link to={'/project-info/' + props.id}>
                            <button className="ftc__join-button" onClick={() => getProjectById(props.id)}>Присоединиться к проекту</button>
                        </Link> 
                        :
                        <Link to='/login'>
                            <button className="ftc__join-button">Присоединиться к проекту</button>
                        </Link> 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export {FindTeamCard}
