import { useEffect, useState } from "react"
import "./GeneralSettings.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { setUserGeneralSettings } from "../../actions/EditUser"

function GeneralSettings() {

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')

    const userModel = useSelector(state => state.user.currentUser)

    useEffect(() => {
        
    })

    function handleLoginChange(e) {
        setLogin(e.target.value);
    }
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handleCityChange(e) {
        setCity(e.target.value);
    }

    const updateData = (id, firstname, nickname, email) => {
        if(id, nickname, firstname, email){
            setUserGeneralSettings(id, firstname, nickname, email)
        } else{
            alert('Пожалуйста, укажите все обязательные поля')
        }
    }


    return (
        <div className="generalsettings">
            <div className="gs__container">
                <div className="gs__column">
                    <div className="gs__navigation">
                        <div className="gs-navigation__row">
                            <Link className="gs-navigation__general" to='/generalsettings'>Общие</Link>
                            <Link className="gs-navigation__profile" to='/profilesettings'>Профиль</Link>
                            <Link className="gs-navigation__personal" to='/personalsettings'>Личные данные</Link>
                        </div>
                    </div>
                    <div className="gs__description">
                        <div className="gs-description__column">
                            <div className="gs-description__title">Общие настройки профиля</div>
                            <div className="gs-description__subtext1">Здесь можно поменять логин, пароль, имя, email</div>
                            <div className="gs-description__subtext2">Для того, чтобы изменения вступили в силу, необходимо нажать кнопку “Сохранить”</div>
                        </div>
                    </div>
                    <div className="gs__form">
                        <div className="gs-form__row">
                            <div className="gs-form__left">
                                <div className="gsform-left__column">
                                    <div className="gsform-left__login">
                                        <div className="gsform-login__text">
                                            Логин: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input 
                                            type="text" 
                                            className="gsform-login__input" 
                                            value={login}
                                            placeholder={userModel.nickname ? userModel.nickname : 'Введите логин'}
                                            onChange={handleLoginChange}
                                        />
                                    </div>
                                    <div className="gsform-left__name">
                                        <div className="gsform-name__text">
                                            Имя: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input 
                                            type="text" 
                                            className="gsform-name__input" 
                                            value={name}
                                            placeholder={(userModel.firstname && userModel.lastname) ? userModel.firstname + ' ' + userModel.lastname: 'Введите имя'}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="gsform-left__private">
                                        <div className="gsform-private__row">
                                            <div className="gsform-private__text">Профиль открыт</div>
                                            <img src={require("../../UI/utils/img/privateimg.png")} alt="" className="gsform-private__img" />
                                        </div>
                                    </div>
                                    <div className="gsform-left__oldpass">
                                        <div className="gsform-oldpass__text">
                                            Старый пароль: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input type="text" className="gsform-oldpass__input" />
                                    </div>
                                    <div className="gsform-left__confirmpass">
                                        <div className="gsform-confirmpass__text">
                                            Подтвердите пароль: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input type="text" className="gsform-confirmpass__input" />
                                    </div>
                                </div>
                            </div>
                            <div className="gs-form__right">
                                <div className="gsform-right__column">
                                    <div className="gsform-right__email">
                                        <div className="gsform-email__text">
                                            Email: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input 
                                            type="text" 
                                            disabled="disabled"
                                            className="gsform-email__input" 
                                            value={userModel.email}
                                            placeholder={userModel.email ? userModel.email : 'Введите email'}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="gsform-right__city">
                                        <div className="gsform-city__text">
                                            Город:
                                        </div>
                                        <input 
                                            type="text" 
                                            className="gsform-city__input" 
                                            value={city}
                                            placeholder={'Введите город'}
                                            onChange={handleCityChange}
                                        />
                                    </div>
                                    <div className="gsform-right__save">
                                        <button 
                                            className="gsform-save__button"
                                            onClick={() => updateData(userModel.id, name, login, email)}
                                        >Сохранить</button>
                                    </div>
                                    <div className="gsform-right__newpass">
                                        <div className="gsform-newpass__text">
                                            Новый пароль: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input type="text" className="gsform-newpass__input" />
                                    </div>
                                    <div className="gsform-right__changepass">
                                        <button className="gsform-changepass__button">Изменить пароль</button>
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

export { GeneralSettings }
