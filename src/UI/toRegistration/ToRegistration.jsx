import "./ToRegistration.scss"
import { NavLink } from "react-router-dom"

function ToRegistration() {
    return (
        <div className="toregistration">
            <NavLink to="/registration" className="toregistration__row">
                <span className="toregistration__text">Регистрация</span>
                <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toregistration__img" />
            </NavLink>
        </div>
    )
}

export { ToRegistration }