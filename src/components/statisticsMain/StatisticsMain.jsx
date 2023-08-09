import "./StatisticsMain.scss"

function StatisticsMain(props) {
    return (
        <div className="statisticsmain">
            <div className="sm__column">
                <div className="sm__title">
                    Статистика OPUS
                </div>
                <div className="sm__projectavaible">
                    <span className="sm-projectavaible__number">{props.projectsnum}</span>  проектов доступно
                </div>
                <div className="sm__users">
                    <span className="sm-users__number">{props.usersnum}</span>  участников
                </div>
            </div>
        </div>
    )
}

export { StatisticsMain }
