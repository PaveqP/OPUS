import "./RegistrationForm.scss"
import { InputAuth } from "../../UI/inputAuth/InputAuth"
import { MiniLogo } from "../../UI/miniLogo/MiniLogo"
import { useState } from "react";
import { registartion } from "../../actions/User";
import { Link } from "react-router-dom";

function RegistrationForm() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const Validate = (password, checkPassword) => {
        if (password && email && checkPassword && name && surname){
            if(password === checkPassword){
                registartion(name, surname, email, password)
                    .then(setName(''), setSurname(''), setEmail(''), setPassword(''), setCheckPassword(''))
                    .then(<link to='/login'></link>)
            }
            else{
                alert("Пароли не совпадают")
            }
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
                                <InputAuth type={"text"} value={name} setValue={setName} placeholder={"Введите своё имя"} name={"name"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Фамилия:</div>
                                <InputAuth type={"text"} value={surname} setValue={setSurname} placeholder={"Введите свою фамилию"} name={"surname"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Логин:</div>
                                <InputAuth type={"text"} value={email} setValue={setEmail} placeholder={"Введите свой логин"} name={"login"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Пароль:</div>
                                <InputAuth type={"password"} value={password} setValue={setPassword} placeholder={"Введите пароль"} name={"pass"} />
                            </div>
                            <div className="regform-main__input">
                                <div className="regform-main__name">Пароль еще раз:</div>
                                <InputAuth type={"password"} value={checkPassword} setValue={setCheckPassword} placeholder={"Введите пароль ещё раз"} name={"pass"} />
                            </div>
                            <div className="regform-main__actions">
                                <div className="regform-actions__row">
                                    <button className="regform-actions__buttonreg" onClick={() => Validate(password, checkPassword)}>Зарегистрироваться</button>
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
                                    <Link to='/login'>
                                    <button className="regform-actions__buttonenter">Войти</button>
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

export { RegistrationForm }