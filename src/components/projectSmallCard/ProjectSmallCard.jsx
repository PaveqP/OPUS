import React from 'react'
import { Link } from 'react-router-dom'

import './ProjectSmallCard.scss'

function ProjectSmallCard({img, title, target, owner, tag, id, link, description}) {
    const projectObject = {
        img: img,
        title: title,
        target: target,
        owner: owner,
        tag: tag,
        description: description,
        id: id,
        link: link
    }
  return (
    <div className='psc'>
        <div className="psc__row">
            <div className="psc__row-left">
                <div className="psc__row-left-image">
                    <img src={img} alt="img" />
                </div>
                <div className="psc__row-left-tag">
                    {tag}
                </div>
            </div>
            <div className="psc__row-right">
                <p className='psc__row-right-title'>
                    {title}
                </p>
                <p className='psc__row-right-target'>
                    <p className='psc__row-right-target-fix'> Цель: </p>
                    {target}
                </p>
                <p className='psc__row-right-owner'>
                    <p className='psc__row-right-owner-fix'> Создатель: </p>
                    {owner}
                </p>
                <Link to={link}>
                    <button className='psc__row-right-button' onClick={() => {localStorage.setItem('currentProjectInfo', projectObject)}}>
                        Подробнее
                    </button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export {ProjectSmallCard}