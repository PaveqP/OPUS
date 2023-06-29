import "./LkContacs.scss"
import { LkContact } from "../../UI/lkContact/LkContact"


function LkContacs() {
    return (
        <div className="lkcontacs">
            <div className="lkcontacs__text">Контакты</div>
            <div className="lkcontacs__contact">
                <div className="lkcontacs-contact__text">Укажите контакты в настройках профиля</div>
            </div>
        </div>
    )
}

export { LkContacs }