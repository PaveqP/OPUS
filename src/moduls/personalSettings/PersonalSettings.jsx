import "./PersonalSettings.scss"
import { Link } from "react-router-dom"

function PersonalSettings() {
    return (
        <div className="personalsettings">
            <div className="ps__container">
                <div className="ps__column">
                    <div className="ps__navigation">
                        <div className="ps-navigation__row">
                            <Link className="ps-navigation__general" to='/generalsettings'>Общие</Link>
                            <Link className="ps-navigation__profile" to='/profilesettings'>Профиль</Link>
                            <Link className="ps-navigation__personal" to='/personalsettings'>Личные данные</Link>
                        </div>
                    </div>
                    <div className="ps__description">
                        <div className="ps-description__column">
                            <div className="ps-description__title">Личные настройки профиля</div>
                            <div className="ps-description__subtext1">Здесь можно указать контактные данные и загрузить резюме</div>
                            <div className="ps-description__subtext2">Для того, чтобы изменения вступили в силу, необходимо нажать кнопку “Сохранить”</div>
                        </div>
                    </div>
                    <div className="ps__form">
                        <div className="ps-form__row">
                            <div className="ps-form__left">
                                <div className="psform-left__column">
                                    <div className="psform-left__age">
                                        <div className="psform-age__text">
                                            Возраст:
                                        </div>
                                        <input type="text" className="psform-age__input" />
                                    </div>
                                    <div className="psform-left__phone">
                                        <div className="psform-phone__text">
                                            Телефон:
                                        </div>
                                        <input type="text" className="psform-phone__input" />
                                    </div>
                                    <div className="psform-left__contacs">
                                        <div className="psform-contacs__text">
                                            Контакты
                                        </div>
                                        <select className="psform-contacs__select">
                                            <option selected className="psform-contacs__option">Выберите</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-form__right">
                                <div className="psform-right__column">
                                    <div className="psform-right__title">Загрузить резюме</div>
                                    <div className="psform-right__add">
                                        <button className="psform-right__addbutton">
                                            <img src={require("../../UI/utils/img/addresume.png")} alt="#" className="psform-right__addbuttonimg" />
                                        </button>
                                    </div>
                                    <div className="psform-right__description">Доступные форматы файла: .pdf, .doc, .docx</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PersonalSettings }