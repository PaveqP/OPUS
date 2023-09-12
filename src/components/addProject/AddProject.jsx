import React from 'react'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'

import './AddProject.scss'
import { useState } from 'react'

function AddProject() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [target, setTarget] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const [link3, setLink3] = useState('')
    const [cont1, setCont1] = useState('')
    const [cont2, setCont2] = useState('')
    const [who, setWho] = useState([])

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPreview, setSelectedPreview] = useState(null);
    const [tag, setTag] = useState('')
    const [commerce, setCommerce] = useState(false)
    const [start, setStart] = useState(false)

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleDescChange(e) {
        setDesc(e.target.value);
    }
    function handleTargetChange(e) {
        setTarget(e.target.value);
    }
    function handleLink1Change(e) {
        setLink1(e.target.value);
    }
    function handleLink2Change(e) {
        setLink2(e.target.value);
    }
    function handleLink3Change(e) {
        setLink3(e.target.value);
    }
    function handleCont1Change(e) {
        setCont1(e.target.value);
    }
    function handleCont2Change(e) {
        setCont2(e.target.value);
    }
    function handleWhoChange(e) {
        setWho(e.target.value);
    }
    function handleTagChange(e) {
        setTag(e.target.value);
    }
    function handleCommerceChange(e) {
        setCommerce(e.target.value);
    }
    function handleStartChange(e) {
        setStart(e.target.value);
    }

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        //selectedFile && alert(selectedFile)
    };
    const handlePreviewChange = (e) => {
        setSelectedPreview(e.target.files[0]);
        //selectedFile && alert(selectedFile)
    };

  return (
    <div className='addproject'>
        <MainHeader/>
        
        <form className="addproject__row">
            <div className="addproject__row-left">
                <label className="addproject__row-left-image">
                    <input className='addproject__row-addimage' type="file" onChange={handleFileChange}/>
                    <img className='addproject__row-addimage-default' src={require('../../UI/utils/img/defaultavatar.png')} alt="avatar" />
                </label>

                <div className="addproject__row-subtitle">
                    Выберите основное изображение проекта
                </div>

                <label className="addproject__row-left-banner">
                    <input className='addproject__row-addbanner' type="file" onChange={handlePreviewChange}/>
                    {/* <img className='addproject__row-addbanner-default' src={require('../../UI/utils/img/defaultavatar.png')} alt="avatar" /> */}
                </label>

                <div className="addproject__row-subtitle">
                    Выберите один тег для проекта
                </div>

                <div className="addproject__row-left-tags">
                    <div className="addproject__row-left-tags-tag">
                        Дизайн
                    </div>
                    <div className="addproject__row-left-tags-tag">
                        Разработка
                    </div>
                    <div className="addproject__row-left-tags-tag">
                        Аудио/Видео
                    </div>
                    <div className="addproject__row-left-tags-tag">
                        Аналитика Бизнес
                    </div>
                    <div className="addproject__row-left-tags-tag">
                        Тексты Переводы
                    </div>
                </div>

                <div className="addproject__row-subtitle">
                    Выберите вид проекта
                </div>

                <div className="addproject__row-left-commerce">
                    <div className="addproject__row-left-commerce-type">
                        Некоммерческий
                    </div>
                    <div className="addproject__row-left-commerce-type">
                        Коммерческий
                    </div>
                </div>

                <div className="addproject__row-subtitle">
                    Дата начала проекта
                </div>

                <input type="text" className='addproject__row-left-datestart baseinput'/>

            </div>
            <div className="addproject__row-right">

                <div className="addproject__row-subtitle">
                    Название проекта 
                </div>

                <input 
                    type="text" 
                    name="title"
                    className='addproject__row-right-name baseinput'
                    value={title}
                    onChange={handleTitleChange}
                />

                <div className="addproject__row-subtitle">
                    Описание проекта
                </div>

                <input 
                    type="text" 
                    name="description"
                    className='addproject__row-right-name baseinput'
                    value={desc}
                    onChange={handleDescChange}
                />

                <div className="addproject__row-subtitle">
                    Цель проекта 
                </div>

                <input 
                    type="text" 
                    name="target"
                    className='addproject__row-right-name baseinput'
                    value={target}
                    onChange={handleTargetChange}
                />

                <div className="addproject__row-subtitle">
                    Ссылки на социальные сети проекта
                </div>

                <input 
                    type="text" 
                    name="link1"
                    className='addproject__row-right-name baseinput'
                    value={link1}
                    onChange={handleLink1Change}
                />
                <input 
                    type="text" 
                    name="link2"
                    className='addproject__row-right-name baseinput'
                    value={link2}
                    onChange={handleLink2Change}
                />
                <input 
                    type="text" 
                    name="link3"
                    className='addproject__row-right-name baseinput'
                    value={link3}
                    onChange={handleLink3Change}
                />

                <div className="addproject__row-subtitle">
                    Контакты руководителя
                </div>
                <div className="addproject__row-right-ownercontacts">
                    <input 
                        type="text" 
                        name='cont1'
                        className='addproject__row-right-name baseinput'
                        value={cont1}
                        onChange={handleCont1Change}
                    />
                    <input 
                        type="text" 
                        name="cont2"
                        className='addproject__row-right-name baseinput'
                        value={cont2}
                        onChange={handleCont2Change}
                    />
                </div>

                <div className="addproject__row-subtitle">
                    Кто нужен в команду?
                </div>

                <div className="addproject__row-right-persons">
                    <div className="addproject__row-right-persons-person">
                        Дизайн
                    </div>
                    <div className="addproject__row-right-persons-person">
                        Разработка
                    </div>
                    <div className="addproject__row-right-persons-person">
                        Аудио/Видео
                    </div>
                    <div className="addproject__row-right-persons-person">
                        Аналитика Бизнес
                    </div>
                    <div className="addproject__row-right-persons-person">
                        Тексты Переводы
                    </div>
                </div>

                <button className='addproject__row-right-confirm' type='submit'>
                    Добавить проект
                </button>
            </div>
        </form>

        <MainFooter/>
    </div>
  )
}

export {AddProject}