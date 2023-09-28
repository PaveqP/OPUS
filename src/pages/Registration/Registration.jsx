import { RegistrationForm } from "../../components/registrationForm/RegistrationForm"
import { AuthInfo } from "../../components/AuthInfo/AuthInfo"
import "./Registration.scss"


function Registration() {
    return (
        <div className="registration">
            <div className="reg__container">
                <div className="reg__row">
                    <div className="reg__form">
                        <RegistrationForm />
                    </div>
                    <div className="reg__info">
                        <AuthInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Registration }

