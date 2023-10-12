import "./BaseInfo.scss"
import { Avatar } from "../../UI/avatar/Avatar"
import { UserData } from "../../UI/userData/UserData"
import { LkContacs } from "../lkContacs/LkContacs"
import { LkSettings } from "../lkSettings/LkSetiings"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


function BaseInfo(props) {

    const userModel = useSelector(state => state.user.currentUser)
    const avatar = useSelector(state => state.user.userPhoto);

    return (
        <div className="baseinfo">
            <div className="baseinfo__row">
                <div className="baseinfo__avatar">
                    {!userModel.photo && !userModel.photo ?
                        <Avatar img={require("../../UI/utils/img/defaultavatar.png")} />
                        :
                        <Avatar img={userModel.photo} />
                    }

                </div>
                <div className="baseinfo__data">
                    <UserData login={userModel.nickname ? userModel.nickname : 'defaultUser'} name={userModel.firstname} surname={userModel.lastname} />
                </div>
                <div className="baseinfo__contacs">
                    <LkContacs />
                </div>
                {/* <div className="baseinfo__settings">
                    <LkSettings />
                </div> */}
                <div className="baseinfo__edit">
                    {
                        <Link to='/generalsettings'>
                            <button className="baseinfo-edit__button">Редактировать</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export { BaseInfo }