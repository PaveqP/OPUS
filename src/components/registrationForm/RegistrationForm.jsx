import "../../components/registrationForm/RegistrationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"

function RegistrationForm() {
    return (
        <div className="regform">
            <div className="regform__row">
                <div className="regform__title">
                    Регистрация
                </div>
                <div className="regform__main">
                    <div className="regform-main__row">
                        <div className="regform-main__input">
                            <InputAuth type={"text"} placeholder={"Имя"} name={"name"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth type={"text"} placeholder={"Фамилия"} name={"surname"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth type={"text"} placeholder={"Логин"} name={"login"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth type={"text"} placeholder={"Пароль"} name={"pass"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth type={"text"} placeholder={"Пароль еще раз"} name={"pass"} />
                        </div>
                        <div className="regform-main__actions">
                            <div className="regform-actions__row">
                                <button className="regform-actions__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                                <div className="regform-actions__or">
                                    ИЛИ
                                </div>
                                <div className="regform-actions__vk">
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

export { RegistrationForm }