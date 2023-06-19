import "./AuthorizationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"
import { MiniLogo } from "../../UI/miniLogo/MiniLogo"
import { useState } from "react";
import { Link } from "react-router-dom";
import { authorization } from "../../actions/User";

function AuthorizationForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                                <div className="authform-main__name">Логин:</div>
                                <InputAuth type={"text"} value={email}  setValue={setEmail} placeholder={"Введите свой логин"} name={"login"} />

                            </div>

                            <div className="authform-main__input">

                                <div className="authform-main__name">Пароль:</div>
                                <InputAuth type={"password"} value={password}  setValue={setPassword} placeholder={"Введите свой пароль"} name={"pass"} />

                            </div>

                            <div className="authform-main__actions">

                                <div className="authform-actions__row">

                                    <button className="authform-actions__buttonenter" onClick={() => authorization(email, password)}>Войти</button>

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

                                    <Link to='/registration'>
                                        <button className="authform-actions__buttonreg">Зарегистрироваться</button>
                                    </Link>

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