import "./MainFooter.scss"
import { Logo } from "../../UI/logo/Logo"

function MainFooter() {
    return (
        <div className="mainfooter">
            <div className="mf__container">
                <div className="mf__top">
                    <div className="mf__top-row">
                        <div className="mf__top-navigation">
                            <div className="mf__navigation-row">
                                <a href="#" className="mf__navigation-about">О нас</a>
                                <a href="#" className="mf__navigation-spheres">Сферы</a>
                                <a href="#" className="mf__navigation-findteam">Найти команду</a>
                                <a href="#" className="mf__navigation-news">Новости</a>
                            </div>
                        </div>
                        <div className="mf__top-logo"><Logo/></div>
                        <div className="mf__top-contacs">
                            <div className="mf__contacs-row">
                                <div className="mf__contacs-text">Контакты:</div>
                                <a href="#" className="mf__contacs-website">opus@info.ru</a>
                                <button className="mf__contacs-vk"><img src={require("../../UI/utils/img/vkfooter.png")} alt="#"/></button>
                                <button className="mf__contacs-tg"><img src={require("../../UI/utils/img/tgfooter.png")} alt="#"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mf__bottom">
                    <div className="mf__bottom-row">
                        <div className="mf__bottom-year">© 2023 Opus</div>
                        <a href="#" className="mf__bottom-politics">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainFooter }