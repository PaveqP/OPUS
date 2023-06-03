import { HeaderLk } from '../../moduls/headerLk/HeaderLk'
import { LkInfo } from '../../moduls/lkInfo/LkInfo'
import "./Lk.scss"



function Lk() {
    return (
        <div className="lk">
            <div className="container">
                <div className="headerLk">
                    <HeaderLk />
                </div>
                <div className="lkInfo">
                    <LkInfo />
                </div>
            </div>
        </div>
    )
}

export { Lk }