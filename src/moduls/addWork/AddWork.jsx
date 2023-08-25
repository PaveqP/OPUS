import "./AddWork.scss"
import { AddWorkLink } from "../../UI/addWorkLink/AddWorkLink"
import { AddWorkImage } from "../../UI/addWorkmage/AddWorkImage"

function AddWork({setShowModal, showModal}) {
    return (
        <div className="addwork">
            <div className="addwork__container">
                <div className="addwork__wrapper">
                    <div className="addwork__title">
                        <div className="addwork-title__wrapper">
                            <div className="addwork-title__exit">
                                <button className="add-exit__button" onClick={() => setShowModal(!showModal)}>
                                    <img src={require("../../UI/utils/img/addworkexit.png")} alt="#" />
                                </button>
                            </div>
                            <div className="addwork-title__text">Самое время пополнить коллекцию работ!</div>
                            <div className="addwork-title__subtext">Добавляйте новые работы в портфолио и продемонстрируйте свои навыки в сообществе. </div>
                        </div>
                    </div>
                    <form className="addwork__form">
                        <div className="addwork-form__wrapper">
                            <div className="addwork__name">
                                <div className="addwork-name__wrapper">
                                    <div className="addwork-name__text">Название работы</div>
                                    <input type="text" required name="workname" className="addwork-name__input" />
                                </div>
                            </div>
                            <div className="addwork__categories">
                                <div className="addwork-categories__wrapper">
                                    <div className="addwork-categories__text">Категория (сфера деятельности)</div>
                                    <select name="categories" required className="addwork-categories__select">
                                        <option value="" disabled className="addwork-categories__option">Выберите категорию</option>
                                        <option value="" className="addwork-categories__option">FrontEnd</option>
                                        <option value="" className="addwork-categories__option">Backend</option>
                                        <option value="" className="addwork-categories__option">Design</option>
                                        <option value="" className="addwork-categories__option">Product Management</option>
                                    </select>
                                </div>
                            </div>
                            <div className="addwork__description">
                                <div className="addwork-description-wrapper">
                                    <div className="addwork-description-text">Описание работы</div>
                                    <textarea name="workdescription" className="addwork-description__textarea"></textarea>
                                </div>
                            </div>
                            <div className="addwork__links">
                                <div className="addwork-links__wrapper">
                                    <div className="addwork-links__text">Ссылки на публикации работы</div>
                                    <div className="addwork-links__subtext">Оставьте ссылки на публикации или упоминания вашей работы на сторонних ресурсах</div>
                                    <AddWorkLink />
                                    <AddWorkLink />
                                    <AddWorkLink />
                                    <div className="addwork-links__add">
                                        <button className="addwork-links__addbutton">Добавить</button>
                                    </div>
                                </div>
                            </div>
                            <div className="addwork__images">
                                <div className="addwork-images__wrapper">
                                    <div className="addwork-images__text">
                                        Загрузите изображения работы
                                    </div>
                                    <div className="addwork-images__image">
                                        <div className="addwork-image__row">
                                            <AddWorkImage />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addwork__cover">
                                <div className="addwork-cover__wrapper">
                                    <div className="addwork-cover__text">
                                        Обложка работы
                                    </div>
                                    <div className="addwork-cover__image">
                                        <AddWorkImage />
                                    </div>
                                </div>
                            </div>
                            <div className="addwork__save">
                                <button className="addwork-save__button">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export { AddWork }
