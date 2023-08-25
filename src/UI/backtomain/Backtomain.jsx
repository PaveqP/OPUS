import "./Backtomain.scss"
import { Link } from "react-router-dom"

function Backtomain() {
    return (
        <div className="backtomain">
            <Link to='/'>
                <div className="backtomain__row">
                    <div className="backtomain__img">
                        <img src={require("../../UI/utils/img/arrowleft.png")} alt="#" />
                    </div>
                    <div className="backtomain__text">Главная</div>
                </div>
            </Link>
        </div>
    )
}

export { Backtomain }