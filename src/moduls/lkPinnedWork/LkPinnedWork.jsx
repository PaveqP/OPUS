import React from 'react'
import './LkPinnedWork.scss'
import { PinnedWork } from '../../components/pinnedWork/PinnedWork'


function Lklkpinnedwork() {
    return (
        <div className="lkpinnedwork">
            <div className="lkpinnedwork__container">
                <div className="lkpinnedwork__row">
                    <div className="lkpinnedwork__title">
                        Закрепленная работа
                    </div>
                    <div className="lkpinnedwork__examplework">
                        <PinnedWork
                            img={require("../../UI/utils/img/pinnedwork_example.png")}
                            title={"Articles & Resources"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum nibh nisi, ut efficitur tortor tincidunt ut."}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Lklkpinnedwork }
