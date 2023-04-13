import { HeaderRegistration } from "../../moduls/headerRegistration/HeaderRegistration"
import { MainRegistration } from "../../moduls/mainRegistartion/MainRegistration"
import "../../pages/registration/Registration.scss"


function Registration() {
    return (
        <div className="registration">
            <div className="container">
                <HeaderRegistration />
                <MainRegistration />
            </div>
        </div>
    )
}

export { Registration }

