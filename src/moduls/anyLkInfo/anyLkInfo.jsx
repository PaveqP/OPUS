import './anyLkInfo.scss'

import { AnySkillsInfo } from '../../components/anySkillsInfo/AnySkillsInfo'
import { AnyBaseInfo } from '../../components/anyBaseInfo/AnyBaseInfo'

function AnyLkInfo(props) {
    return (
        <div className="lkinfo">
            <div className="lkinfo__container">
                <div className="lkinfo__row">
                    <div className="lkinfo__base">
                        <AnyBaseInfo id={props.id}/>
                    </div>
                    <div className="lkinfo__skills">
                        <AnySkillsInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AnyLkInfo }