import "./ToAuthorization.scss"
import { NavLink } from "react-router-dom"

function ToAuthorization() {
    return (
        <div className="toauthorization">
            <NavLink to='/login'>
                <span className="toauthorization__text">Войти</span>
                <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toauthorization__img" />
            </NavLink>
        </div>
    )
}

export { ToAuthorization }