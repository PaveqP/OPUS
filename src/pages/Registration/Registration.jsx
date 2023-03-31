import { HeaderRegistration } from "../../moduls/headerRegistration/HeaderRegistration"
import "../../pages/registration/Registration.scss"


function Registration() {
    return (
        <div className="reg">
            <div className="container">
                <HeaderRegistration />
            </div>
        </div>
    )
}

export { Registration }

