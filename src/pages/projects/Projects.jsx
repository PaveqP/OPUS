import React, { useState } from 'react'
import { LkSwitcher } from '../../components/lkSwitcher/LkSwitcher'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { ProjectFilters } from '../../components/projectFilters/ProjectFilters'
import { ProjectSmallCard } from '../../components/projectSmallCard/ProjectSmallCard'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'

import './Projects.scss'

function Projects({profile, setProfile, projects, setProjects}) {

  const getFilterState = () => {
    const filterValue = "default";
    return filterValue;
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const [filterType, setFilterType] = useState(getFilterState)

  const [owner, setOwner] = useState(true)
  const [member, setMember] = useState(false)

  console.log(filterType)

  return (
    <>
        <div>
            <MainHeader/>
        </div>
        <div>
            <LkSwitcher profile={profile} setProfile={setProfile} projects={projects} setProjects={setProjects}/>
        </div>
        <div className='projects__title'>
          Все проекты
        </div>
        <div>
            <ProjectFilters filterType={filterType} setFilterType={handleFilterChange} owner={owner} setOwner={setOwner} member={member} setMember={setMember}/>
        </div>
        <div>
            <ProjectSmallCard 
              img={require('../../UI/utils/img/project_placeholder.png')} 
              title={'Самое крутое приложение в мире, вы вообще не представляете насколько. Опус - сказка, мечта, конфетка'} 
              target={'Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!'} 
              owner={'livermoney'} 
              tag={'Аналитика Бизнес'}
              id='1'
            />
        </div>
        <div>
            <ProjectSmallCard 
              img={require('../../UI/utils/img/project_placeholder.png')} 
              title={'Самое крутое приложение в мире, вы вообще не представляете насколько. Опус - сказка, мечта, конфетка'} 
              target={'Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!'} 
              owner={'livermoney'} 
              tag={'Аналитика Бизнес'}
              id='2'
            />
        </div>
        <div>
            <ProjectSmallCard 
              img={require('../../UI/utils/img/project_placeholder.png')} 
              title={'Самое крутое приложение в мире, вы вообще не представляете насколько. Опус - сказка, мечта, конфетка'} 
              target={'Расширить деловые связи, сделать мир лучше и проще для аудитории в возрасте 16-23 лет. Мы - будущее, хотя нет, мы - настоящее!'} 
              owner={'livermoney'} 
              tag={'Аналитика Бизнес'}
              id='3'
            />
        </div>
        <div>
            <MainFooter/>
        </div>
    </>
  )
}

export {Projects}
