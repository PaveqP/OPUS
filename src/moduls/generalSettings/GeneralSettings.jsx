import "./GeneralSettings.scss"

function GeneralSettings() {
    return (
        <div className="generalsettings">
            <div className="gs__container">
                <div className="gs__column">
                    <div className="gs__navigation">
                        <div className="gs-navigation__row">
                            <a className="gs-navigation__general" href="#">Общие</a>
                            <a className="gs-navigation__profile" href="#">Профиль</a>
                            <a className="gs-navigation__personal" href="#">Личные данные</a>
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
                                        <input type="text" className="gsform-login__input" />
                                    </div>
                                    <div className="gsform-left__name">
                                        <div className="gsform-name__text">
                                            Имя: <span className="gsform__redstar">*</span>
                                        </div>
                                        <input type="text" className="gsform-name__input" />
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
                                        <input type="text" className="gsform-email__input" />
                                    </div>
                                    <div className="gsform-right__city">
                                        <div className="gsform-city__text">
                                            Город:
                                        </div>
                                        <input type="text" className="gsform-city__input" />
                                    </div>
                                    <div className="gsform-right__save">
                                        <button className="gsform-save__button">Сохранить</button>
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
