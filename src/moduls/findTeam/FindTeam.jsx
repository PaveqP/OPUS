import "./FindTeam.scss"
import { FindTeamCard } from "../../components/findTeamCard/FindTeamCard"

function FindTeam() {
    return (
        <div className="findteam">
            <div className="ft__container">
                <div className="ft__header">
                    <div className="ft__header-row">
                        <div className="ft__header-title">Актуальные проекты</div>
                        <button className="ft__header-button">Найти команду <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ft__button-arrow"/> </button>
                    </div>
                </div>
                <div className="ft__main">
                    <div className="ft__main-row">
                        <div className="ft__main-card1">
                            <FindTeamCard 
                                avatar={require("../../UI/utils/img/projectavatar1.png")}
                                title={"NFTgo"}
                                specialization={"Дизайн"}
                                money={"Коммерческий"}
                                wanted1={"Дизайнер"}
                                wanted2={""}
                                wanted3={""}
                                goal={"Создать платформу для обучение начинающих 3D-дизайнеров, которые хотят попробовать себя в NFT."}
                            />
                        </div>
                        <div className="ft__main-card2">
                            <FindTeamCard 
                                avatar={require("../../UI/utils/img/projectavatar2.png")}
                                title={"DoneUni"}
                                specialization={"Бизнес"}
                                money={"Некоммерческий"}
                                wanted1={"Дизайнер"}
                                wanted2={"Frontend-разработчик"}
                                wanted3={""}
                                goal={"Создать туденческое приложение, где ИИ помогает студентам с курсовыми, исходя из данных университета прошлых лет."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FindTeam}
