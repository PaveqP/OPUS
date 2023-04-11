import { Logo } from "../../UI/logo/Logo"
import { Help } from "../../UI/help/Help"
import { Backtomain } from "../../UI/backtomain/Backtomain"
import "./HeaderAuthentication.scss"

function HeaderAuthentication() {
    return (
        <div className="header-authen">
            <div className="header-authen__backtomain">
                <Backtomain />
            </div>
            <div className="header-authen__logo">
                <Logo />
            </div>
            <div className="header-authen__help">
                <Help />
            </div>
        </div >
    )

}

export { HeaderAuthentication }


