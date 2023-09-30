import "./PortfolioPage.scss"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"
import { MainHeaderNew } from "../../moduls/MainHeaderNew/MainHeaderNew"
import { PortfolioPageProfile } from "../../components/portfolioPageProfile/PortfolioPageProfile"
import { Link } from "react-router-dom"

function PortfolioPage({currentpage}) {
    return (
        <div className="portfoliopage">
            <div className="pp__header">
                <MainHeaderNew/>
            </div>
            <div className="pp__main">
                <div className="pp__container">
                    <div className="pp__top">
                        <div className="pp__top-row">
                            <div className="pp__top-navigation">
                                <div className="pp__navigation-row">
                                    <Link to='/' className="pp__navigation-main">Главная</Link>
                                    <img src={require("../../UI/utils/img/miniarrowright.png")} alt="#" className="pp__navigation-img" />
                                    <p href="" className="pp__navigation-current">{currentpage}</p>
                                </div>
                            </div>
                            <div className="pp__top-filters">
                                <select name="" id="" className="pp__filters-select">
                                    <option value="" className="pp__filters-option" selected>Фильтровать по категориям</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pp__main">
                        <div className="pp__row">
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                            <PortfolioPageProfile
                                avatar={require("../../UI/utils/img/eugeneavatar.png")}
                                name={"Евгений"}
                                surname={"Никитин"}
                                skill={"Разработка"}
                                age={"19 лет"}
                                city={"г.Санкт-Петербург"}
                                description={"Всем привет! ищу в команду full-stack разработчика для реализации большого количества проектов. В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!\
                                В нашей команде уже есть дизайнер и аналитики, нам не хватает только тебя!"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pp__footer">
                <MainFooter/>
            </div>
        </div>
    )
}

export {PortfolioPage}
