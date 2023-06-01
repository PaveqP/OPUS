import "./LkInfo.scss"
import { InfoBase } from "../../components/infoBase/InfoBase"
import { InfoSkills } from "../../components/infoSkills/InfoSkills"

function LkInfo() {
    return (
        <div className="lkinfo">
            <div className="info__background">
                <div className="info__row">
                    <div className="info__base">
                        <InfoBase />
                    </div>
                    <div className="info__skills">
                        <InfoSkills />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { LkInfo }