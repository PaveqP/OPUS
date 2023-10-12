import './AnyLk.scss'
import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'
import { Lklkpinnedwork } from '../../moduls/lkPinnedWork/LkPinnedWork'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AnyLkInfo } from '../../moduls/anyLkInfo/anyLkInfo'
import { AnyLkWorks } from '../../moduls/anyLkWorks/AnyLkWorks'
import { AnyLkStatistic } from '../../moduls/anyLkStatistic/AnyLkStatistic'


function AnyLk({profile, setProfile, projects, setProjects}) {

    const [showModal, setShowModal] = useState(false)
    const [currentId, setCurrentId] = useState(0)
    const user = useSelector(state => state.user.currentUser)

    // useEffect(() => {
    //     let currentUrl = window.location.href
    //     let parseId = currentUrl.split('/')
    //     setCurrentId(parseId[5])
    // }, [])
    
    return (
        <>
        {/* {showModal &&
            <div className="blackWraper"></div>
        } */}
            
            <div className="lk">
                <div className="lk__container">
                    <div className="lk__row">
                        <div className="mainheader">
                            <MainHeader />
                        </div>
                        {/* <div>
                            <LkSwitcher profile={profile} setProfile={setProfile} projects={projects} setProjects={setProjects}/>
                        </div> */}
                        <div className="lkInfo">
                            <AnyLkInfo id={currentId}/>
                        </div>
                        <div className="lkseparator">
                            <img className="lkseparator__img" src={require("../../UI/utils/img/separator.png")} alt="#" ></img>
                        </div>
                        <div className="lkstatistic">
                            <AnyLkStatistic />
                        </div>
                        <div className="lkseparator">
                            <img src={require("../../UI/utils/img/separator.png")} alt="#"></img>
                        </div>
                        <div className="lkpinnedwork">
                            <Lklkpinnedwork />
                        </div>
                        <div className="lkseparator">
                            <img src={require("../../UI/utils/img/separator.png")} alt="#"></img>
                        </div>
                        <div className="lkworks">
                            <AnyLkWorks setShowModal={setShowModal} showModal={showModal}/>
                        </div>
                        <div className="mainfooter">
                            <MainFooter />
                        </div>
                    </div>
                </div>
                {/* {showModal &&
                    <div className="lk__addwork" >
                        <AddWork setShowModal={setShowModal} showModal={showModal}/>
                    </div>
                } */}
                
            </div>
        </>
    )
}

export { AnyLk }