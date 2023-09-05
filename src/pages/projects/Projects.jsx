import React from 'react'
import { LkSwitcher } from '../../components/lkSwitcher/LkSwitcher'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'

import './Projects.scss'

function Projects({profile, setProfile, projects, setProjects}) {
  return (
    <>
        <div>
            <MainHeader/>
        </div>
        <div>
            <LkSwitcher profile={profile} setProfile={setProfile} projects={projects} setProjects={setProjects}/>
        </div>
    </>
  )
}

export {Projects}
