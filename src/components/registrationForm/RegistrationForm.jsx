import "./RegistrationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"
import { registartion, vkAuth } from "../../actions/User"
import { useState } from "react"

function RegistrationForm() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const Validate = (password, checkPassword) => {
        if(password === checkPassword){
            registartion(name, surname, email, password)
        }
        else{
            alert("Пароли не совпадают")
        }
    }

    const hardlink = "https://oauth.vk.com/authorize?"
    + "client_id=" + '51553473'
    + "&display=page"
    + "&redirect_uri=" + 'http://localhost:3000/registration'
    + "&scope=friends,email,wall,photos,offline"
    + "&response_type=code"
    + "&v=5.131"
    + "&state=1";

    return (
        <div className="regform">
            <div className="regform__row">
                <div className="regform__title">
                    Регистрация
                </div>
                <div className="regform__main">
                    <div className="regform-main__row">
                        <div className="regform-main__input">
                            <InputAuth value={name} setValue={setName} type={"text"} placeholder={"Имя"} name={"name"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth value={surname} setValue={setSurname} type={"text"} placeholder={"Фамилия"} name={"surname"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth value={email} setValue={setEmail} type={"text"} placeholder={"Логин"} name={"login"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth value={password} setValue={setPassword} type={"password"} placeholder={"Пароль"} name={"pass"} />
                        </div>
                        <div className="regform-main__input">
                            <InputAuth value={checkPassword} setValue={setCheckPassword} type={"password"} placeholder={"Пароль еще раз"} name={"pass"} />
                        </div>
                        <div className="regform-main__actions">
                            <div className="regform-actions__row">
                                <button 
                                    className="regform-actions__button"
                                    onClick={() => Validate(password, checkPassword)}
                                >
                                    ЗАРЕГИСТРИРОВАТЬСЯ
                                </button>
                                <div className="regform-actions__or">
                                    ИЛИ
                                </div>
                                <div className="regform-actions__vk">
                                    <a href={hardlink}>
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