import { HeaderRegistration } from "../../moduls/headerRegistration/HeaderRegistration"
import { MainRegistration } from "../../moduls/mainRegistration/MainRegistration"
import "../../pages/registration/Registration.scss"


function Registration() {
    return (
        <div className="reg">
            <div className="container">
                <HeaderRegistration />
                <MainRegistration />
            </div>
        </div>
    )
}

export { Registration }

