import React from 'react'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'

import './ProjectBigCard.scss'
import { useSelector } from 'react-redux'

function ProjectBigCard({img, description, tag, type, date, title, need_list, contacts, links}) {

    const project = useSelector(state => state.user.currentProject)

  return (
    <div className='pbc'>
      <div>
        <MainHeader/>
      </div>
      <div className="pbc__row">
        <div className="pbc__row-left">
            <img className="pbc__row-left-image" src={project && project.avatarUrl} alt="project image" />
            <p className="pbc__row-left-title">
                Описание проекта
            </p>
            <p className="pbc__row-left-description">
                {project && project.description}
            </p>
            {/* <button className="pbc__row-left-role">
                Вы состоите в проекте!
            </button> */}
        </div>
        <div className="pbc__row-right">
            <div className="pbc__row-right-config">
                <div className="pbc__row-right-config-tag">
                {project && project.id}
                </div>
                {/* <div className="pbc__row-right-config-tag">
                {localStorage.getItem('type') ? localStorage.getItem('type') : 'deafault'}
                </div>
                <div className="pbc__row-right-config-date">
                {localStorage.getItem('date') ? localStorage.getItem('type') : 'date'}
                </div> */}
            </div>
            <div className="pbc__row-right-title">
            {project && project.name}
            </div>
            <p className="pbc__row-right-subtitle">
                Цель проекта
            </p>
            <p className="pbc__row-right-text">
                {project && project.mission}
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
                <p className="pbc__row-right-link">{localStorage.getItem('owner')}</p>
                // contacts.map(elem => (
                //     <p className="pbc__row-right-link">
                //         {elem}
                //     </p>
                // ))
            }
            <p className="pbc__row-right-subtitle">
                Ссылки на социальные сети
            </p>
            {
                // <p className="pbc__row-right-link">
                //     {localStorage.getItem('link')}
                // </p>
                project.links && project.links.map(elem => (
                    <a className="pbc__row-right-link">
                        {elem.name}
                    </a>
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
