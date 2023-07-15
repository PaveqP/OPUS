import "./ProfileSettings.scss"
import { Avatar } from "../../UI/avatar/Avatar"
import { Ability } from "../../UI/ability/Ability"
import { ChooseAbility } from "../../UI/chooseAbility/ChooseAbility"

function ProfileSettings() {
    return (
        <div className="profilesettings">
            <div className="profs__container">
                <div className="profs__column">
                    <div className="profs__navigation">
                        <div className="profs-navigation__row">
                            <a className="profs-navigation__general" href="#">Общие</a>
                            <a className="profs-navigation__profile" href="#">Профиль</a>
                            <a className="profs-navigation__personal" href="#">Личные данные</a>
                        </div>
                    </div>
                    <div className="profs__description">
                        <div className="profs-description__column">
                            <div className="profs-description__title">Настройки профиля</div>
                            <div className="profs-description__subtext1">Здесь можно указать данные, связанные с профессиональной деятельностью</div>
                            <div className="profs-description__subtext2">Для того, чтобы изменения вступили в силу, необходимо нажать кнопку “Сохранить”</div>
                        </div>
                    </div>
                    <div className="profs__form">
                        <div className="profs-form__column">
                            <div className="profs-form__main">
                                <div className="profs-main__row">
                                    <div className="profs-main__left">
                                        <div className="profs-main__leftcolumn">
                                            <div className="profs-main__avatar">
                                                <Avatar img={require("../../UI/utils/img/defaultavatar.png")} />
                                            </div>
                                            <div className="profs-main__change">
                                                <button className="profs-main__changebutton">Изменить фото</button>
                                            </div>
                                            <div className="profs-main__delete">
                                                <button className="profs-main__deletebutton">Удалить фото</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profs-main__right">
                                        <div className="profs-main__rightcolumn">
                                            <div className="profs-main__specialization">
                                                <div className="profs-specialization__text">Специализация: </div>
                                                <div className="profs-specialization__subtext">Вы можете выбрать из списка 3 основные области специализации</div>
                                                <select className="profs-specialization__select">
                                                    <option selected className="profs-specialization__option">Выберите</option>
                                                </select>
                                            </div>
                                            <div className="profs-main__experience">
                                                <div className="profs-experience__text">Опыт:</div>
                                                <input type="text" className="profs-experience__input" />
                                            </div>
                                            <div className="profs-main__team">
                                                <div className="profs-team__text">Команда:</div>
                                                <select className="profs-team__select">
                                                    <option className="profs-team__option"></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profs-form__abilities">
                                <div className="profs-abilities__column">
                                    <div className="profs-abilities__title">Навыки</div>
                                    <div className="profs-abilities__ability">
                                        <div className="profs-abilities__abilityrow">
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <Ability text={"HTML"} />
                                            <ChooseAbility />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profs-form__about">
                                <div className="profs-about__column">
                                    <div className="profs-about__title">О себе</div>
                                    <div className="profs-about__text">
                                        <textarea name="" id="" className="profs-about__textarea"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="profs-form__save">
                                <button className="profs-form__savebutton">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProfileSettings }