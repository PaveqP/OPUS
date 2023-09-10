import React from 'react'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'

import './AddProject.scss'

function AddProject() {
  return (
    <div className='addproject'>
        <MainHeader/>
        
        <form className="addproject__row">
            <div className="addproject__row-left">
                <label className="addproject__row-left-image">
                    <input className='addproject__row-addimage' type="file" />
                    <img className='addproject__row-addimage-default' src={require('../../UI/utils/img/defaultavatar.png')} alt="avatar" />
                </label>

                <div className="addproject__row-subtitle">
                    Выберите основное изображение проекта
                </div>

                <label className="addproject__row-left-banner">
                    <input className='addproject__row-addbanner' type="file" />
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
                    <div className="addproject__row-left-commerce-no:active">
                        Некоммерческий
                    </div>
                    <div className="addproject__row-left-commerce-yes">
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

                <input type="text" className='addproject__row-right-name baseinput'/>

                <div className="addproject__row-subtitle">
                    Описание проекта
                </div>

                <input type="text" className='addproject__row-right-name baseinput'/>

                <div className="addproject__row-subtitle">
                    Цель проекта 
                </div>

                <input type="text" className='addproject__row-right-name baseinput'/>

                <div className="addproject__row-subtitle">
                    Ссылки на социальные сети проекта
                </div>

                <input type="text" className='addproject__row-right-name baseinput'/>
                <input type="text" className='addproject__row-right-name baseinput'/>
                <input type="text" className='addproject__row-right-name baseinput'/>

                <div className="addproject__row-subtitle">
                    Контакты руководителя
                </div>
                <div className="addproject__row-right-ownercontacts">
                    <input type="text" className='addproject__row-right-name baseinput'/>
                    <input type="text" className='addproject__row-right-name baseinput'/>
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