import "./FindTeamCard.scss"

function FindTeamCard(props) {
    return (
        <div className="findteamcard">
            <div className="ftc__container">
                <div className="ftc__column">
                    <div className="ftc__header">
                        <div className="ftc__header-row">
                            <div className="ftc__header-avatar"> <img src={props.avatar} alt="#"/></div>
                            <div className="ftc__header-info">
                                <div className="ftc__info-column">
                                    <div className="ftc__info-nameandsurname">{props.name} {props.surname}</div>
                                    <div className="ftc__info-skills">
                                        <div className="ftc__skills-row">
                                            <div className="ftc__skill-1">{props.skill__1}</div>
                                            <div className="ftc__skill-2">{props.skill__2}</div>
                                            <div className="ftc__skill-3">{props.skill__3}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ftc__age">{props.age}</div>
                    <div className="ftc__city">{props.city}</div>
                    <div className="ftc__description">{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export {FindTeamCard}
