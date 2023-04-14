import { Logo } from "../../UI/logo/Logo"
import { Backtomain } from "../../UI/backtomain/Backtomain"
import { ToRegistration } from "../../UI/toRegistration/ToRegistration"
import "./HeaderAuthorization.scss"

function HeaderAuthorization() {
    return (
        <div className="header-auth">
            <div className="header-auth__backtomain">
                <Backtomain />
            </div>
            <div className="header-auth__logo">
                <Logo />
            </div>
            <div className="header-auth__toregistration">
                <ToRegistration />
            </div>
        </div >
    )

}

export { HeaderAuthorization }
