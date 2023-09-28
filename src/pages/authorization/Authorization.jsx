import { AuthorizationForm } from "../../components/authorizationForm/AuthorizationForm"
import { AuthInfo } from "../../components/authInfo/AuthInfo"
import "./Authorization.scss"


function Authorization() {
    return (
        <div className="authorization">
            <div className="auth__container">
                <div className="auth__row">
                    <div className="auth__form">
                        <AuthorizationForm />
                    </div>
                    <div className="auth__info">
                        <AuthInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Authorization }
