import React from 'react'

import './ProjectSmallCard.scss'

function ProjectSmallCard({img, title, target, owner, tag}) {
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
                <button className='psc__row-right-button'>
                    Подробнее
                </button>
            </div>
        </div>
    </div>
  )
}

export {ProjectSmallCard}