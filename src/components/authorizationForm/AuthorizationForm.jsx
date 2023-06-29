import "./AuthorizationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"
import { MiniLogo } from "../../UI/miniLogo/MiniLogo"

function AuthorizationForm() {
    return (
        <div className="authform">
            <div className="authform__container">
                <div className="authform__row">
                    <div className="authform__header">
                        <div className="authform-header__row">
                            <div className="authform-header__nothing">
                            </div>
                            <div className="authform-header__logo">
                                <MiniLogo />
                            </div>
                            <div className="authform-header__backtomain">
                                Главная
                            </div>
                        </div>
                    </div>
                    <div className="authform__main">
                        <div className="authform-main__row">
                            <div className="authform-main__title">
                                Добро пожаловать!
                            </div>
                            <div className="authform-main__input">
                                <div className="authform-main__name">Имя:</div>
                                <InputAuth type={"text"} placeholder={"Введите свой логин или email"} name={"login"} />
                            </div>
                            <div className="authform-main__input">
                                <div className="authform-main__name">Фамилия:</div>
                                <InputAuth type={"password"} placeholder={"Введите свой пароль"} name={"pass"} />
                            </div>
                            <div className="authform-main__actions">
                                <div className="authform-actions__row">
                                    <button className="authform-actions__buttonenter">Войти</button>
                                    <div className="authform-actions__or">
                                        ИЛИ
                                    </div>
                                    <button className="authform-actions__buttonvk">
                                        <div className="buttonvk__row">
                                            <div className="buttonvk__img">
                                                <img src={require("../../UI/utils/img/vk.png")} alt="#"></img>
                                            </div>
                                            <div className="buttonvk__text">
                                                Войти через ВК
                                            </div>
                                        </div>
                                    </button>
                                    <div className="authform-actions__or">
                                        ИЛИ
                                    </div>
                                    <button className="authform-actions__buttonreg">Зарегистрироваться</button>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        </div >
    )

}

export { AuthorizationForm }