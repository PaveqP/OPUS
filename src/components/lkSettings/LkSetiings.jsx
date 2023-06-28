import "./LkSettings.scss"
import { OpenLk } from "../../UI/openLk/OpenLk"
import { CloseLk } from "../../UI/closeLk/CloseLk"



function LkSettings() {
    return (
        <div className="lksettings">
            <div className="lksettings__text">Настройки</div>
            <div className="lksettings__openorclose">
                <OpenLk />
            </div>
        </div>
    )
}

export { LkSettings }