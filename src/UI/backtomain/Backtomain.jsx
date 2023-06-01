import "./Backtomain.scss"

function Backtomain() {
    return (
        <div className="backtomain">
            <a href="">
                <div className="backtomain__row">
                    <div className="backtomain__img">
                        <img src={require("../../UI/utils/img/arrowleft.png")} alt="#" />
                    </div>
                    <div className="backtomain__text">Главная</div>
                </div>
            </a>
        </div>
    )
}

export { Backtomain }