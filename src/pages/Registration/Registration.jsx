import { HeaderAuthentication } from "../../moduls/headerAuthentication/HeaderAuthentication"
import { MainRegistration } from "../../moduls/mainRegistartion/MainRegistration"
import "./Registration.scss"


function Registration() {
    return (
        <div className="registration">
            <div className="container">
                <HeaderAuthentication />
                <MainRegistration />
            </div>
        </div>
    )
}

export { Registration }

