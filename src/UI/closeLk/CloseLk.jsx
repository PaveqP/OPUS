import "./CloseLk.scss"

function CloseLk() {
    return (
        <div className="closelk">
            <a href="">
                <div className="closelk__row">
                    <span className="closelk__text">закрыт</span>
                    <img src={require("../../UI/utils/img/closelk.png")} alt="#" className="closelk__img" />
                </div>
            </a>
        </div>
    )
}

export { CloseLk }