import "./MainPageHeaderNotAuth.scss"
import { Logo } from "../../UI/logo/Logo"

function MainPageHeaderNotAuth() {
    return (
        <div className="mainpageheadernotauth">
            <div className="mphna__container">
                <div className="mphna__row">
                    <div className="mphna__logo">
                        <Logo/>
                    </div>
                    <div className="mphna__menu">
                        <div className="mphna__menu-row">
                            <a href="#" className="mphna__menu-about">О нас</a>
                            <a href="#" className="mphna__menu-spheres">Сферы развития</a>
                            <a href="#" className="mphna__menu-news">Новости</a>
                            <a href="#" className="mphna__menu-contacs">Контакты</a>
                        </div>
                    </div>
                    <div className="mphna__buttons">
                        <button className="mphna__buttons-reg">Зарегистрироваться</button>
                        <button className="mphna__buttons-enter">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MainPageHeaderNotAuth}