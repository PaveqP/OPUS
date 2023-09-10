import "./CreateTeam.scss"

function CreateTeam() {
    return (
        <div className="createteam">
            <div className="ct__container">
                <div className="ct__row">
                    <div className="ct__title">Или создай её в личном кабинете</div>
                    <button className="ct__button">Создать команду <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ct__button-arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export {CreateTeam}
