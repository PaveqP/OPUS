import "./LkInfo.scss"
import { BaseInfo } from "../../components/baseInfo/BaseInfo"
import { SkillsInfo } from "../../components/skillsInfo/SkillsInfo"

function LkInfo() {
    return (
        <div className="lkinfo">
            <div className="lkinfo__container">
                <div className="lkinfo__row">
                    <div className="lkinfo__base">
                        <BaseInfo />
                    </div>
                    <div className="lkinfo__skills">
                        <SkillsInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { LkInfo }