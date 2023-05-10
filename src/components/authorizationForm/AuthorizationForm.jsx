import "./AuthorizationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"
import { authorization, vkAuth } from "../../actions/User"
import { useState } from "react"

function AuthorizationForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="authform">
            <div className="authform__row">
                <div className="authform__title">
                    Авторизация
                </div>
                <div className="authform__main">
                    <div className="authform-main__row">
                        <div className="authform-main__input">
                            <InputAuth value={email} setValue={setEmail} type={"text"} placeholder={"Логин"} name={"login"} />
                        </div>
                        <div className="authform-main__input">
                            <InputAuth value={password} setValue={setPassword} type={"password"} placeholder={"Пароль"} name={"pass"} />
                        </div>
                        <div className="authform-main__actions">
                            <div className="authform-actions__row">
                                <button 
                                    className="authform-actions__button"
                                    onClick={() => authorization(email, password)}
                                >
                                    ВОЙТИ
                                </button>
                                <div className="authform-actions__or">
                                    ИЛИ
                                </div>
                                <div className="authform-actions__vk">
                                    <div onClick={() => vkAuth()}>
                                        <img src={require("../../UI/utils/img/vk.png")} alt="#"></img>
                                    </div>
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