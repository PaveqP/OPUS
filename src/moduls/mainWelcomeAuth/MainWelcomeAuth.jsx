import "./MainWelcomeAuth.scss"
import { UserProjectsMain } from "../../components/userProjectsMain/UserProjectsMain"
import { StatisticsMain } from "../../components/statisticsMain/StatisticsMain"

function MainWelcomeAuth() {
    return (
        <div className="mainwelcomeauth">
            <div className="mwa__container">
                <div className="mwa__column">
                    <div className="mwa__title">Рады просто рады</div>
                    <div className="mwa__description">
                        <div className="mwa-description__row">
                            <div className="mwa-description__projects">
                                <UserProjectsMain
                                    number={'0'}
                                    text={'Упс, кажется тут пусто, добавьте проект или вступите в новый'}
                                />
                            </div>
                            <div className="mwa-description__statistics">
                                <StatisticsMain
                                    projectsnum={'Много'}
                                    usersnum={'Много'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainWelcomeAuth }
