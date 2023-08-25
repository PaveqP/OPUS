import { MainHeader } from '../../moduls/mainHeader/MainHeader'
import { LkInfo } from '../../moduls/lkInfo/LkInfo'
import { LkStatistic } from '../../moduls/lkStatistic/LkStatistic'
import { MainFooter } from '../../moduls/mainFooter/MainFooter'
import { Lklkpinnedwork } from '../../moduls/lkPinnedWork/LkPinnedWork'
import { LkWorks } from '../../moduls/lkWorks/LkWorks'
import { AddWork } from '../../moduls/addWork/AddWork'
import "./Lk.scss"
import { useState } from 'react'



function Lk() {

    const [showModal, setShowModal] = useState(false)
    
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
                        <div className="lkInfo">
                            <LkInfo />
                        </div>
                        <div className="lkseparator">
                            <img className="lkseparator__img" src={require("../../UI/utils/img/separator.png")} alt="#" ></img>
                        </div>
                        <div className="lkstatistic">
                            <LkStatistic />
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
                            <LkWorks setShowModal={setShowModal} showModal={showModal}/>
                        </div>
                        <div className="mainfooter">
                            <MainFooter />
                        </div>
                    </div>
                </div>
                {showModal &&
                    <div className="lk__addwork" >
                        <AddWork setShowModal={setShowModal} showModal={showModal}/>
                    </div>
                }
                
            </div>
        </>
    )
}

export { Lk }