import { HeaderAuthorization } from "../../moduls/headerAuthorization/HeaderAuthorization"
import { MainAuthorization } from "../../moduls/mainAuthorization/MainAuthorization"
import "../../pages/authorization/Authorization.scss"


function Authorization() {
    return (
        <div className="authorization">
            <div className="container">
                <HeaderAuthorization />
                <MainAuthorization />
            </div>
        </div>
    )
}

export { Authorization }
