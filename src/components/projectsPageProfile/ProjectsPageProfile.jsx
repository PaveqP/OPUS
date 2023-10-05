import "./ProjectsPageProfile.scss"

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
                        <button className="ppp1__buttons-submit">Подать заявку</button>
                        <button className="ppp1__buttons-details">Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ProjectsPageProfile}
