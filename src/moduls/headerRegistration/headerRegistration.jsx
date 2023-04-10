import { Logo } from "../../UI/logo/Logo"
import { Help } from "../../UI/help/Help"
import { Backtomain } from "../../UI/backtomain/Backtomain"
import "../../moduls/headerRegistration/HeaderRegistration.scss"

function HeaderRegistration() {
    return (
        <div className="header-reg">
            <div className="header-reg__backtomain">
                <Backtomain />
            </div>
            <div className="header-reg__logo">
                <Logo />
            </div>
            <div className="header-reg__help">
                <Help />
            </div>
        </div >
    )

}

export { HeaderRegistration }


