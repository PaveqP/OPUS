import React from 'react'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'

import './ProjectBigCard.scss'

function ProjectBigCard({img, description, tag, type, date, title, need_list, contacts, links}) {
  return (
    <div className='pbc'>
      <div>
        <MainHeader/>
      </div>
      <div className="pbc__row">
        <div className="pbc__row-left">
            <img className="pbc__row-left-image" src={img} alt="project image" />
            <p className="pbc__row-left-title">
                Описание проекта
            </p>
            <p className="pbc__row-left-description">
                {description}
            </p>
            <button className="pbc__row-left-role">
                Вы состоите в проекте!
            </button>
        </div>
        <div className="pbc__row-right">
            <div className="pbc__row-right-config">
                <div className="pbc__row-right-config-tag">
                    {tag}
                </div>
                <div className="pbc__row-right-config-tag">
                    {type}
                </div>
                <div className="pbc__row-right-config-date">
                    {date}
                </div>
            </div>
            <div className="pbc__row-right-title">
                {title}
            </div>
            <p className="pbc__row-right-subtitle">
                Цель проекта
            </p>
            <p className="pbc__row-right-text">
                Цель проекта
            </p>
            <p className="pbc__row-right-subtitle">
                Кто нужен в команду
            </p>
            {
                need_list.map(elem => (
                    <div className="pbc__row-right-need">
                        {elem}
                    </div>
                ))
            }
            <p className="pbc__row-right-subtitle">
                Контакты руководителя
            </p>
            {
                contacts.map(elem => (
                    <p className="pbc__row-right-link">
                        {elem}
                    </p>
                ))
            }
            <p className="pbc__row-right-subtitle">
                Ссылки на социальные сети
            </p>
            {
                links.map(elem => (
                    <p className="pbc__row-right-link">
                        {elem}
                    </p>
                ))
            }
        </div>
      </div>
      <div>
        <MainFooter/>
      </div>
    </div>
  )
}

export {ProjectBigCard}
