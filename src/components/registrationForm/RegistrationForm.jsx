import "./RegistrationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"
import { MiniLogo } from "../../UI/miniLogo/MiniLogo"


function RegistrationForm() {
    return (
        <div className="regform">
            <div className="regform__container">
                <div className="regform__row">
                    <div className="regform__header">
                        <div className="regform-header__row">
                            <div className="regform-header__nothing">
                            </div>
                            <div className="regform-header__logo">
                                <MiniLogo />
                            </div>
                            <div className="regform-header__backtomain">
                                Главная
                            </div>
                        </div>
                    </div>
                    <div className="regform__main">
                        <div className="regform-main__row">
                            <div className="regform-main__title">
                                Добро пожаловать!
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Имя:</div>
                                <InputAuth type={"text"} placeholder={"Введите своё имя"} name={"name"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Фамилия:</div>
                                <InputAuth type={"text"} placeholder={"Введите свою фамилию"} name={"surname"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Логин:</div>
                                <InputAuth type={"text"} placeholder={"Введите свой пароль"} name={"login"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Пароль:</div>
                                <InputAuth type={"password"} placeholder={"Введите пароль"} name={"pass"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Пароль еще раз:</div>
                                <InputAuth type={"password"} placeholder={"Введите пароль ещё раз"} name={"pass"} />
                            </div>
                            <div className="regform-main__actions">
                                <div className="regform-actions__row">
                                    <button className="regform-actions__buttonreg">Зарегистрироваться</button>
                                    <div className="regform-actions__or">
                                        ИЛИ
                                    </div>
                                    <button className="regform-actions__buttonvk">
                                        <div className="buttonvk__row">
                                            <div className="buttonvk__img">
                                                <img src={require("../../UI/utils/img/vk.png")} alt="#"></img>
                                            </div>
                                            <div className="buttonvk__text">
                                                Войти через ВК
                                            </div>
                                        </div>
                                    </button>
                                    <div className="regform-actions__or">
                                        ИЛИ
                                    </div>
                                    <button className="regform-actions__buttonenter">Войти</button>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        </div >
    )

}

export { RegistrationForm }