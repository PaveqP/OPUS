import React from 'react'
import { Link } from 'react-router-dom'
import { getProjectById } from '../../actions/Projects'

import './ProjectSmallCard.scss'

function ProjectSmallCard({img, avatar, title, target, owner, tag, id, link, description}) {
    const projectObject = {
        img: img,
        avatar: avatar,
        title: title,
        target: target,
        owner: owner,
        tag: tag,
        description: description,
        id: id,
        link: link
    }

    const setProjectStorageData = () => {
        localStorage.setItem('img', img)
        localStorage.setItem('avatar', avatar)
        localStorage.setItem('title', title)
        localStorage.setItem('target', target)
        localStorage.setItem('owner', owner)
        localStorage.setItem('tag', tag)
        localStorage.setItem('description', description)
        localStorage.setItem('id', id)
        localStorage.setItem('link', link)
    }

  return (
    <div className='psc'>
        <div className="psc__row">
            <div className="psc__row-left">
                <div className="psc__row-left-image">
                    <img className="psc__row-left-image-example" src={img} alt="img" />
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
                    <button className='psc__row-right-button' onClick={() => getProjectById(id)}>
                        Подробнее
                    </button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export {ProjectSmallCard}