import "./MainWelcome.scss"
import { UserProjectsMain } from "../../components/userProjectsMain/UserProjectsMain"
import { StatisticsMain } from "../../components/statisticsMain/StatisticsMain"

function MainWelcome() {
    return (
        <div className="mainwelcome">
            <div className="mw__container">
                <div className="mw__column">
                    <div className="mw__title">Рады просто рады</div>
                    <div className="mw__description">
                        <div className="mw-description__row">
                            <div className="mw-description__projects">
                                <UserProjectsMain
                                    number={'0'}
                                    text={'Упс, кажется тут пусто, добавьте проект или вступите в новый'}
                                />
                            </div>
                            <div className="mw-description__statistics">
                                <StatisticsMain
                                    projectsnum={'51 324'}
                                    usersnum={'132 051'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainWelcome }
