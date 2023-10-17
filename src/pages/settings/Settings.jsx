import "./Settings.scss"
import { MainHeader } from "../../moduls/mainHeader/MainHeader"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"
import { GeneralSettings } from "../../moduls/generalSettings/GeneralSettings"
import { PersonalSettings } from "../../moduls/personalSettings/PersonalSettings"
import { ProfileSettings } from "../../moduls/profileSettings/ProfileSettings"

function Settings() {
    return (
        <div className="settings">
            <div className="settings__row">
                <div className="settings__header">
                    <MainHeader />
                </div>
                <div className="settings__main">
                    <PersonalSettings />
                </div>
                <div className="settings__footer">
                    <MainFooter />
                </div>
            </div>
        </div>
    )
}

export { Settings }
