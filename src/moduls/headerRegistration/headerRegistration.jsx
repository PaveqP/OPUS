import { Logo } from "../../UI/logo/Logo"
import { Backtomain } from "../../UI/backtomain/Backtomain"
import { ToAuthorization } from "../../UI/toAuthorization/ToAuthorization"
import "./HeaderRegistration.scss"

function HeaderRegistration() {
    return (
        <div className="header-reg">
            <div className="header-reg__backtomain">
                <Backtomain />
            </div>
            <div className="header-reg__logo">
                <Logo />
            </div>
            <div className="header-reg__toauthorization">
                <ToAuthorization />
            </div>
        </div >
    )

}

export { HeaderRegistration }


