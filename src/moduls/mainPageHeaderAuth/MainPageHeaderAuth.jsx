import "./MainPageHeaderAuth.scss"
import { Logo } from "../../UI/logo/Logo"

function MainPageHeaderAuth() {
    return (
        <div className="mainpageheaderauth">
            <div className="mpha__container">
                <div className="mpha__row">
                    <div className="mpha__logo">
                        <Logo />
                    </div>
                    <div className="mpha__menu">
                        <div className="mpha-menu__row">
                            <a href="#" className="mpha-menu__spheres">Сферы развития</a>
                            <a href="#" className="mpha-menu__find">Найти команду</a>
                            <a href="#" className="mpha-menu__create">Создать команду</a>
                            <a href="#" className="mpha-menu__news">Новости</a>
                            <a href="#" className="mpha-menu__contacs">Контакты</a>
                        </div>
                    </div>
                    <div className="mpha__lk">
                        <div className="mpha-lk__row">
                            <div className="mpha-lk__portfolio">
                                <button className="mpha-lk__portfoliobutton">Пополнить портфолио</button>
                            </div>
                            <div className="mpha-lk__lk">
                                <button className="mpha-lk__lkbutton">
                                    <img src={require("../../UI/utils/img/lk.png")} alt="#" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainPageHeaderAuth }
