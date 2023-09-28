import "./CreateTeam.scss"
import { Link } from "react-router-dom"

function CreateTeam() {
    return (
        <div className="createteam" id="createTeam">
            <div className="ct__container">
                <div className="ct__row">
                    <div className="ct__title">Создай команду в личном кабинете</div>
                    {
                        localStorage.getItem('token') ?
                        <Link to='/addproject'><button className="ct__button">Создать команду <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ct__button-arrow"/></button></Link>
                        :
                        <Link to='/login'><button className="ct__button">Создать команду <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ct__button-arrow"/></button></Link>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export {CreateTeam}
