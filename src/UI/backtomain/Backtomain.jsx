import "../../UI/backtomain/Backtomain.scss"

function Backtomain() {
    return (
        <div className="backtomain">
            <a href="">
                <img src={require("../../UI/utils/img/Arrow.png")} alt="#" className="bactomain__img" />
                <span className="backtomain__text">главная</span>
            </a>
        </div>
    )
}

export { Backtomain }