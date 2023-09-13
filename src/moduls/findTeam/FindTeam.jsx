import "./FindTeam.scss"
import { FindTeamCard } from "../../components/findTeamCard/FindTeamCard"

function FindTeam() {
    return (
        <div className="findteam" id="findTeam">
            <div className="ft__container">
                <div className="ft__header">
                    <div className="ft__header-row">
                        <div className="ft__header-title"><b>Найди участников</b> в разработке</div>
                        <button className="ft__header-button">Найти участника <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ft__button-arrow"/> </button>
                    </div>
                </div>
                <div className="ft__main">
                    <div className="ft__main-row">
                        <div className="ft__main-card1">
                            <FindTeamCard 
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill__1={"Бизнес"}
                                skill__2={"Project"}
                                skill__3={"SCRUM-мастер"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! Я full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                        </div>
                        <div className="ft__main-card2">
                            <FindTeamCard 
                                avatar={require("../../UI/utils/img/mashaavatar.png")}
                                name={"Мария"}
                                surname={"Лазарева"}
                                skill__1={"Веб-дизайн"}
                                skill__2={"Figma"}
                                skill__3={"Tilda"}
                                age={"18 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! Хочу попасть в позитивную молодую команду с full-stack разработчиком и SCRUM-мастером)"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FindTeam}
