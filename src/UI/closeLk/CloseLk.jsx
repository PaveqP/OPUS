import "./CloseLk.scss"

function CloseLk() {
    return (
        <div className="closelk">
            <a href="">
                <div className="closelk__row">
                    <div className="closelk__img">
                        <img src={require("../../UI/utils/img/closelk.png")} alt="#" />
                    </div>
                    <div className="closelk__text">Профиль закрыт</div>
                </div>
            </a>
        </div>
    )
}

export { CloseLk }