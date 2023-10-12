import "./ProjectsPage.scss"
import {MainHeader} from "../../moduls/mainHeader/MainHeader"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"
import { ProjectsPageProfile } from "../../components/projectsPageProfile/ProjectsPageProfile"
import { useEffect } from "react"
import { getUsersProjects } from "../../actions/Projects"
import { useSelector } from "react-redux"

function ProjectsPage(props) {

    useEffect(() => {
        getUsersProjects()
    }, [])

    const projects = useSelector(state => state.user.projects)

    //console.log(projects)

    return (
        <div className="projectspage`">
            <div className="pp1">
                <div className="pp1__header">
                    <MainHeader/>
                </div>
                <div className="pp1__main">
                    <div className="pp1__main-container">
                        <div className="pp1__navigation">
                            <div className="pp1__navigation-row">
                                    <a href="#" className="pp1__navigation-main">Главная</a>
                                    <img src={require("../../UI/utils/img/miniarrowright.png")} alt="#" className="pp1__navigation-img" />
                                    <a href="" className="pp1__navigation-current">{props.currentpage}</a>
                            </div>
                        </div>
                        <div className="pp1__currentpageandfiltres">
                            <div className="pp1__currentpageandfiltres-row">
                                <div className="pp1__currentpage">{props.currentpage}</div>
                                <div className="pp1__filtres">
                                    <select name="" id="" className="pp1__filtes-select">
                                        <option value="" className="pp1__filtres-option" selected>Фильтры</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pp1__projects">
                            <div className="pp1__projects-row">
                                {projects && projects.map((project) => (
                                    <ProjectsPageProfile
                                    avatar={project.imageUrl}
                                    title={project.name}
                                    goal={project.mission}
                                    creator={"livermoney"}
                                    id={project.id}
                                />
                                ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pp1__footer">
                    <MainFooter/>
                </div>
            </div>   
        </div>
    )
}

export {ProjectsPage}   

