import { Logo } from "../../UI/logo/Logo"
import "../../moduls/headerRegistration/HeaderRegistration.scss"

function HeaderRegistration() {
    return (
        <div className="header-reg">
            <div className="header-reg__backtomain">
                <a href="">
                    <img src={require("../../UI/utils/img/arrow.png")} alt="#" className="bactomain__img" />
                    <span className="backtomain__text">главная</span>
                </a>
            </div>
            <div className="header-reg__logo">
                <Logo />
            </div>
            <div className="header-reg__help">
                <a href="">
                    <img src={require("../../UI/utils/img/help.png")} alt="#" className="help__img" />
                    <span className="help__text">справка</span>
                </a>
            </div>
        </div>
    )

}

export { HeaderRegistration }


