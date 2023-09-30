import "./ProjectsPage.scss"
import {MainHeader} from "../../moduls/mainHeader/MainHeader"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"
import { ProjectsPageProfile } from "../../components/projectsPageProfile/ProjectsPageProfile"

function ProjectsPage(props) {
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
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
                                <ProjectsPageProfile
                                    avatar={require("../../UI/utils/img/testavatarproject.png")}
                                    title={"Опус: найди или создай команду вместе с нами!"}
                                    goal={"Цель: Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!"}
                                    creator={"livermoney"}
                                />
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

