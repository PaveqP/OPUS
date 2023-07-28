import "./BaseInfo.scss"
import { Avatar } from "../../UI/avatar/Avatar"
import { UserData } from "../../UI/userData/UserData"
import { LkContacs } from "../lkContacs/LkContacs"
import { LkSettings } from "../lkSettings/LkSetiings"

function BaseInfo() {
    return (
        <div className="baseinfo">
            <div className="baseinfo__row">
                <div className="baseinfo__avatar">
                    <Avatar img={require("../../UI/utils/img/defaultavatar.png")} />
                </div>
                <div className="baseinfo__data">
                    <UserData login={"Genius_User"} name={"Vladimir"} surname={"PUTIN"} />
                </div>
                <div className="baseinfo__contacs">
                    <LkContacs />
                </div>
                <div className="baseinfo__settings">
                    <LkSettings />
                </div>
                <div className="baseinfo__edit">
                    <button className="baseinfo-edit__button">Редактировать</button>
                </div>
            </div>
        </div>
    )
}

export { BaseInfo }