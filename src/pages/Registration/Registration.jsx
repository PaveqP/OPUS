import { HeaderRegistration } from "../../moduls/headerRegistration/headerRegistration"
import { MainRegistration } from "../../moduls/mainRegistration/MainRegistration"
import "../../pages/Registration/Registration.scss"


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

