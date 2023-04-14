import "./AuthorizationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"

function AuthorizationForm() {
    return (
        <div className="authform">
            <div className="authform__row">
                <div className="authform__title">
                    Авторизация
                </div>
                <div className="authform__main">
                    <div className="authform-main__row">
                        <div className="authform-main__input">
                            <InputAuth type={"text"} placeholder={"Логин"} name={"login"} />
                        </div>
                        <div className="authform-main__input">
                            <InputAuth type={"password"} placeholder={"Пароль"} name={"pass"} />
                        </div>
                        <div className="authform-main__actions">
                            <div className="authform-actions__row">
                                <button className="authform-actions__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                                <div className="authform-actions__or">
                                    ИЛИ
                                </div>
                                <div className="authform-actions__vk">
                                    <a href="">
                                        <img src={require("../../UI/utils/img/vk.png")} alt="#"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { AuthorizationForm }