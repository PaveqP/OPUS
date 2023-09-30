import "./ProfileSettings.scss"
import { Avatar } from "../../UI/avatar/Avatar"
import { Ability } from "../../UI/ability/Ability"
import { ChooseAbility } from "../../UI/chooseAbility/ChooseAbility"
import { Link } from "react-router-dom"
import { useState } from "react"
import { deleteUserAvatar, setUserAvatar, setUserProfileSettings } from "../../actions/EditUser"
import { useSelector } from "react-redux"


function ProfileSettings() {

    const avatar = useSelector(state => state.user.userPhoto);
    const user = useSelector(state => state.user.currentUser)

    //console.log(avatar)

    const [photo, setPhoto] = useState(null)
    const [category, setCategory] = useState('default');
    const [about, setAbout] = useState('')

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };
    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }
    function handleAboutChange(e) {
        setAbout(e.target.value);
    }

    const sendAvatar = () => {
        const data = new FormData()
        data.append('photo', photo)

        setUserAvatar(data)
    }

    const sendUserProfileSettings = (specialize, about) => {
        setUserProfileSettings(specialize, about, user)
    }

    const getLink = (ava) => {
        let link = ava.slice(5, ava.length)
        return link
    }

    const sendInfo = (specialize, about) => {
        if(photo){
            sendAvatar()
            sendUserProfileSettings(specialize, about)
        } else{
            sendUserProfileSettings(specialize, about)
        }
    }

    return (
        <div className="profilesettings">
            <div className="profs__container">
                <div className="profs__column">
                <Link to='/cabinet' className="settings__backtolk">ЛК</Link>
                    <div className="profs__navigation">
                        <div className="profs-navigation__row">
                            <Link className="profs-navigation__general" to='/generalsettings'>Общие</Link>
                            <Link className="profs-navigation__profile" to='/profilesettings'>Профиль</Link>
                            <Link className="profs-navigation__personal" to='/personalsettings'>Личные данные</Link>
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
                                                {!user.photo && !user.photo?
                                                    <Avatar img={require("../../UI/utils/img/defaultavatar.png")} />
                                                    :
                                                    <Avatar img={user.photo} />
                                                }
                                                
                                            </div>
                                            <label className="profs-main__change">
                                                <input type="file" className="profs-main__changebutton" onChange={handlePhotoChange} name="file" multiple accept="image/*"/>
                                                {photo ?
                                                    <span>{photo.name}</span>
                                                    :
                                                    <span>Загрузить фото</span>
                                                }
                                                
                                            </label>
                                            <div className="profs-main__delete">
                                                <button className="profs-main__deletebutton" onClick={() => deleteUserAvatar()}>Удалить фото</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profs-main__right">
                                        <div className="profs-main__rightcolumn">
                                            <div className="profs-main__specialization">
                                                <div className="profs-specialization__text">Специализация: </div>
                                                <div className="profs-specialization__subtext">Вы можете выбрать из списка 1 основную область специализации</div>
                                                <select className="profs-specialization__select" value={category} onChange={handleCategoryChange}>
                                                    <option selected className="profs-specialization__option" value='default' >Выберите</option>
                                                    <option selected className="profs-specialization__option" value='design' >Дизайн</option>
                                                    <option selected className="profs-specialization__option" value='development' >Разработка</option>
                                                    <option selected className="profs-specialization__option" value='audio' >Аудио/Видео</option>
                                                    <option selected className="profs-specialization__option" value='analytics' >Аналитика, бизнес</option>
                                                    <option selected className="profs-specialization__option" value='texts' >Тексты, переводы</option>
                                                </select>
                                            </div>
                                            {/* <div className="profs-main__experience">
                                                <div className="profs-experience__text">Опыт:</div>
                                                <input type="text" className="profs-experience__input" />
                                            </div>
                                            <div className="profs-main__team">
                                                <div className="profs-team__text">Команда:</div>
                                                <select className="profs-team__select">
                                                    <option className="profs-team__option"></option>
                                                </select>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profs-form__abilities">
                                <div className="profs-abilities__column">
                                    {/* <div className="profs-abilities__title">Навыки</div>
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
                                    </div> */}
                                </div>
                            </div>
                            <div className="profs-form__about">
                                <div className="profs-about__column">
                                    <div className="profs-about__title">О себе</div>
                                    <div className="profs-about__text">
                                        {user.about && user.about ?
                                            <textarea name="" id="" className="profs-about__textarea" value={about} onChange={handleAboutChange} placeholder={user.about}></textarea>
                                            :
                                            <textarea name="" id="" className="profs-about__textarea" value={about} onChange={handleAboutChange} placeholder="Начните писать информацию о себе..."></textarea>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="profs-form__save">
                                <button className="profs-form__savebutton" onClick={() => sendInfo(category, about)}>Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProfileSettings }