import "./Backtomain.scss"

function Backtomain() {
    return (
        <div className="backtomain">
            <a href="">
                <img src={require("../../UI/utils/img/arrowleft.png")} alt="#" className="bactomain__img" />
                <span className="backtomain__text">Главная</span>
            </a>
        </div>
    )
}

export { Backtomain }