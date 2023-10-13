import "./MainWelcomeAuth.scss"
import { UserProjectsMain } from "../../components/userProjectsMain/UserProjectsMain"
import { StatisticsMain } from "../../components/statisticsMain/StatisticsMain"
import { getUsersProjects } from "../../actions/Projects"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getListOfUsers } from "../../actions/User"


function MainWelcomeAuth() {

    useEffect(() => {
        getUsersProjects()
        getListOfUsers()
    }, [])

    const projects = useSelector(state => state.user.projects)
    const users = useSelector(state => state.user.allUsers)

    return (
        <div className="mainwelcomeauth">
            <div className="mwa__container">
                <div className="mwa__column">
                    <div className="mwa__title">Рады вас видеть!</div>
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
                                    projectsnum={projects && projects.length}
                                    usersnum={users && users.length}
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
