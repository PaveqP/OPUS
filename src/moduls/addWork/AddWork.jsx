import "./AddWork.scss"
import { AddWorkLink } from "../../UI/addWorkLink/AddWorkLink"
import { AddWorkImage } from "../../UI/addWorkmage/AddWorkImage"
import { useState } from "react";
import { addUserWork } from "../../actions/AddWork";
import axios from "axios";
import { authentification } from "../../actions/User";

function AddWork({setShowModal, showModal}) {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [links, setLinks] = useState('');

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPreview, setSelectedPreview] = useState(null);

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }
    function handleLinksChange(e) {
        setLinks(e.target.value);
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        //selectedFile && alert(selectedFile)
    };
    const handlePreviewChange = (e) => {
        setSelectedPreview(e.target.files[0]);
        //selectedFile && alert(selectedFile)
    };


    const handleFileUpload = () => {
        if (!selectedFile){
            alert("Пожалуйста, загрузите данные")
            return
        }
    }

    const addWorks = async (name, category, description, links) => {
        
        const textData = {
            'name': name,
            'description': description,
            'tags': [],
            'links': [{"url" : "https://vk.ru/krutayarabota"}]
        }

        const jsonData = JSON.stringify(textData)
        const blob = new Blob([jsonData], {
            type: 'multipart/form-data'
        });

        const formData = new FormData()

        formData.append("file", selectedFile)
        formData.append("cover", selectedPreview)
        formData.append("photo", selectedFile)
        formData.append("work", jsonData)
        
        addUserWork(formData)

        setShowModal(!showModal)
    }


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
                    <form className="addwork__form" >
                        <div className="addwork-form__wrapper">
                            <div className="addwork__name">
                                <div className="addwork-name__wrapper">
                                    <div className="addwork-name__text">Название работы</div>
                                    <input 
                                        type="text" 
                                        required 
                                        name="workname" 
                                        className="addwork-name__input" 
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </div>
                            </div>
                            <div className="addwork__categories">
                                <div className="addwork-categories__wrapper">
                                    <div className="addwork-categories__text">Категория (сфера деятельности)</div>
                                    <select name="categories" required className="addwork-categories__select" value={category} onChange={handleCategoryChange}>
                                        <option value="default" disabled className="addwork-categories__option">Выберите категорию</option>
                                        <option value="frontEnd" className="addwork-categories__option">FrontEnd</option>
                                        <option value="backEnd" className="addwork-categories__option">Backend</option>
                                        <option value="design" className="addwork-categories__option">Design</option>
                                        <option value="pm" className="addwork-categories__option">Product Management</option>
                                    </select>
                                </div>
                            </div>
                            <div className="addwork__description">
                                <div className="addwork-description-wrapper">
                                    <div className="addwork-description-text">Описание работы</div>
                                    <textarea 
                                        name="workdescription" 
                                        className="addwork-description__textarea"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                    ></textarea>
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
                                        <div className="addwork-links__addbutton">Добавить</div>
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
                                            <div className="addworkimage">
                                                <input className="addworkimage__button" type="file" onChange={handleFileChange}/>
                                            </div>
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
                                        <div className="addworkimage">
                                            <input className="addworkimage__button" type="file" onChange={handlePreviewChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addwork__save">
                                <div className="addwork-save__button" onClick={() => addWorks(name, category, description, links)}>
                                    Сохранить
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export { AddWork }
