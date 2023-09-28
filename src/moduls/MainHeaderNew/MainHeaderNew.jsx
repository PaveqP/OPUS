import "./MainHeaderNew.scss"
import { Logo } from "../../UI/logo/Logo"

function MainHeaderNew() {
    return (
        <div className="mainheadernew">
            <div className="mhn__container">
                <div className="mhn__row">
                    <div className="mhn__logo">
                        <Logo />
                    </div>
                    <div className="mhn__menu">
                        <div className="mhn-menu__row">
                            <a href="#" className="mhn-menu__spheres">Сферы развития</a>
                            <a href="#" className="mhn-menu__find">Найти команду</a>
                            <a href="#" className="mhn-menu__create">Создать команду</a>
                            <a href="#" className="mhn-menu__news">Новости</a>
                            <a href="#" className="mhn-menu__contacs">Контакты</a>
                        </div>
                    </div>
                    <div className="mhn__lk">
                        <div className="mhn-lk__row">
                            <div className="mhn-lk__portfolio">
                                <button className="mhn-lk__portfoliobutton">Пополнить портфолио</button>
                            </div>
                            <div className="mhn-lk__lk">
                                <button className="mhn-lk__lkbutton">
                                    <img src={require("../../UI/utils/img/lkblack.png")} alt="#" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MainHeaderNew}
