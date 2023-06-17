import { MainRegistration } from "../../moduls/mainRegistartion/MainRegistration"
import { RegistrationForm } from "../../components/registrationForm/RegistrationForm"
import { AuthInfo } from "../../components/AuthInfo/AuthInfo"
import "../../pages/registration/Registration.scss"


function Registration() {
    return (
        <div className="registration">
            <div className="container">
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

