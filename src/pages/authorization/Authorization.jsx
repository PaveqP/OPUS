import { HeaderAuthentication } from "../../moduls/headerAuthentication/HeaderAuthentication"
import { MainAuthorization } from "../../moduls/mainAuthorization/MainAuthorization"
import "../../pages/authorization/Authorization.scss"


function Authorization() {
    return (
        <div className="authorization">
            <div className="container">
                <HeaderAuthentication />
                <MainAuthorization />
            </div>
        </div>
    )
}

export { Authorization }
