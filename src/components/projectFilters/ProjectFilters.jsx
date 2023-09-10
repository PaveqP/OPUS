import React from 'react'
import { Link } from 'react-router-dom'

import './ProjectFilters.scss'

function ProjectFilters({filterType, setFilterType, owner, setOwner, member, setMember}) {

  const switchRole = () => {
    setOwner(!owner)
    setMember(!member)
}

  return (
    <div className='projectfilters'>
          <section className='projectfilters__row'>
            
              <select id="projectFilters" className="projectfilters__row-filters" value={filterType} onChange={setFilterType}>
                  <option value="default">Фильтр</option>
                  <option value="role">Роль</option>
                  <option value="tags">Тэги</option>
                  <option value="date">Дата</option>
              </select>

              <Link to='/addproject'>
                <button className="projectfilters__row-add-project">
                    Создать проект
                </button>
              </Link>

              <section className="projectfilters__role">
                <div className="projectfilters____role-row">
                    {owner &&
                        <button className='projectfilters__row-profile-active'>
                            Создатель
                        </button>
                    }
                    {!owner &&
                          <button className='projectfilters__row-profile' onClick={() => switchRole()}>
                              Создатель
                          </button>
                    }
                    

                    {member &&
                        <button className='projectfilters__row-projects-active'>
                            Участник
                        </button>
                    }
                    {!member &&
                          <button className='projectfilters__row-projects' onClick={() => switchRole()}>
                              Участник
                          </button>
                    }
                </div>
              </section>

          </section>
    </div>
  )
}

export {ProjectFilters}