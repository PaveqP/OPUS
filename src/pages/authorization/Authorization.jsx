import { AuthorizationForm } from "../../components/authorizationForm/AuthorizationForm"
import { AuthInfo } from "../../components/AuthInfo/AuthInfo"
import "./Authorization.scss"
import { useEffect } from "react"
import { getToken } from "../../vkActions/GetToken"


function Authorization() {

    // useEffect(() => {
    //     getToken()
    // }, [])

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
