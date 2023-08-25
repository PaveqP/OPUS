import "./MainPageHeader.scss"
import { Logo } from "../../UI/logo/Logo"
import { Link } from "react-router-dom"

function MainPageHeader() {
    return (
        <div className="mainpageheader">
            <div className="mph__container">
                <div className="mph__row">
                    <div className="mph__logo">
                        <Logo />
                    </div>
                    <div className="mph__menu">
                        <div className="mph-menu__row">
                            <a href="#" className="mph-menu__spheres">Сферы развития</a>
                            <a href="#" className="mph-menu__find">Найти команду</a>
                            <a href="#" className="mph-menu__create">Создать команду</a>
                            <a href="#" className="mph-menu__news">Новости</a>
                            <a href="#" className="mph-menu__contacs">Контакты</a>
                        </div>
                    </div>
                    <div className="mph__lk">
                        <div className="mph-lk__row">
                            <div className="mph-lk__portfolio">
                                <button className="mph-lk__portfoliobutton">Пополнить портфолио</button>
                            </div>
                            <div className="mph-lk__lk">
                                <Link to='/login'>
                                    <button className="mph-lk__lkbutton">
                                        <img src={require("../../UI/utils/img/lk.png")} alt="#" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainPageHeader }
