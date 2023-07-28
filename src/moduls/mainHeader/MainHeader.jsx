import "./MainHeader.scss"
import { Logo } from "../../UI/logo/Logo"
import { Backtomain } from "../../UI/backtomain/Backtomain"
import { Exit } from "../../UI/exit/Exit"

function MainHeader() {
    return (
        <div className="mainheader">
            <div className="mainheader__container">
                <div className="mainheader__row">
                    <div className="mainheader__logo">
                        <Logo />
                    </div>
                    <div className="mainheader__navigation">
                        <div className="navigation__row">
                            <div className="navigation__backtomain">
                                <Backtomain />
                            </div>
                            <div className="navigation__settings">
                                <a href="#" className="navigation-settings__text">Настройки</a>
                            </div>
                            <div className="navigation__help">
                                <a href="#" className="navigation-help__text">Справка</a>
                            </div>
                            <div className="navigation__exit">
                                <Exit />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainHeader }