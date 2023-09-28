import React, { useEffect, useState } from 'react'
import { LkSwitcher } from '../../components/lkSwitcher/LkSwitcher'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { ProjectFilters } from '../../components/projectFilters/ProjectFilters'
import { ProjectSmallCard } from '../../components/projectSmallCard/ProjectSmallCard'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'
import { getProjectAvatar, getUsersProjects } from '../../actions/Projects'

import './Projects.scss'
import { useSelector } from 'react-redux'

function Projects({profile, setProfile, projects, setProjects}) {

  useEffect(() => {
    getUsersProjects()
  }, [])

  //console.log(getProjectAvatar(10), 'immmage')

  const user = useSelector(state => state.user.currentUser)
  const projectsList = useSelector(state => state.user.projects)

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
        {
          user.projects && user.projects.length > 0 ? user.projects.map((project) => (

            <ProjectSmallCard 
              img={require('../../UI/utils/img/project_placeholder.png')} 
              title={project.name} 
              target={project.mission} 
              owner={user.nickname ? user.nickname : user.firstname} 
              tag={project.id}
              id={project.id}
              key={project.id}
              link={'/project-info/' + project.id}
            />
          )) :
          <div className="whitespace">

          </div>
        }
        
        <div>
            <MainFooter/>
        </div>
    </>
  )
}

export {Projects}
