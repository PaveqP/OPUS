import { HeaderRegistration } from "../../moduls/headerRegistration/HeaderRegistration"
import { MainAuthorization } from "../../moduls/mainAuthorization/MainAuthorization"
import "./Authorization.scss"


function Authorization() {
    return (
        <div className="authorization">
            <div className="container">
                <HeaderRegistration />
                <MainAuthorization />
            </div>
        </div>
    )
}

export { Authorization }
