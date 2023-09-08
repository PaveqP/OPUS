import "./LkContacs.scss"
import { LkContact } from "../../UI/lkContact/LkContact"
import { useSelector } from "react-redux"

function LkContacs() {

    const userModel = useSelector(state => state.user.currentUser)

    return (
        <div className="lkcontacs">
            <div className="lkcontacs__text">Контакты</div>
            <div className="lkcontacs__contact">
                {userModel.email &&
                    <div className="lkcontacs-contact__text">email: {userModel.email}</div>
                }
                
            </div>
        </div>
    )
}

export { LkContacs }