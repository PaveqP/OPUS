import { MainAuthorization } from "../../moduls/mainAuthorization/MainAuthorization"
import "../../pages/authorization/Authorization.scss"


function Authorization() {
    return (
        <div className="authorization">
            <div className="container">
                <MainAuthorization />
            </div>
        </div>
    )
}

export { Authorization }
