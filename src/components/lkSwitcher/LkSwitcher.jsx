import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './LkSwitcher.scss'
import { useSelector } from 'react-redux'

function LkSwitcher({profile, setProfile, projects, setProjects}) {

    const user = useSelector(state => state.user.currentUser)

    const switchProfile = () => {
        setProfile(!profile)
        setProjects(!projects)
    }

  return (
    <div className='lkswitcher'>
        <div className="lkswitcher__row">
            {profile &&
                <button className='lkswitcher__row-profile-active'>
                    Профиль
                </button>
            }
            {!profile &&
                <Link to={user && `/cabinet/` + user.id}>
                    <button className='lkswitcher__row-profile' onClick={() => switchProfile(!profile)}>
                        Профиль
                    </button>
                </Link>
            }
            

            {projects &&
                <button className='lkswitcher__row-projects-active'>
                    Проекты
                </button>
            }
            {!projects &&
                <Link to='/projects'>
                    <button className='lkswitcher__row-projects' onClick={() => switchProfile(!projects)}>
                        Проекты
                    </button>
                </Link>
            }
            
        </div>
    </div>
  )
}


export {LkSwitcher}