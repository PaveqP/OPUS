import "./ToRegistration.scss"
import { NavLink } from "react-router-dom"

function ToRegistration() {
    return (
        <div className="toregistration">
<<<<<<< HEAD
            <NavLink to="/registration">
                <span className="toregistration__text">Регистрация</span>
                <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toregistration__img" />
            </NavLink>
        </div>
=======
            <a href="">
                <div className="toregistration__row">
                    <span className="toregistration__text">Регистрация</span>
                    <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toregistration__img" />
                </div>
            </a >
        </div >
>>>>>>> ba8c292d1dd221359de683509264b705f1260e73
    )
}

export { ToRegistration }