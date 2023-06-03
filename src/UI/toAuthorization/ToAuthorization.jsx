import "./ToAuthorization.scss"
import { NavLink } from "react-router-dom"

function ToAuthorization() {
    return (
        <div className="toauthorization">
<<<<<<< HEAD
            <NavLink to='/login'>
                <span className="toauthorization__text">Войти</span>
                <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toauthorization__img" />
            </NavLink>
=======
            <a href="">
                <div className="toauthorization__row">
                    <span className="toauthorization__text">Войти</span>
                    <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toauthorization__img" />
                </div>
            </a>
>>>>>>> ba8c292d1dd221359de683509264b705f1260e73
        </div>
    )
}

export { ToAuthorization }