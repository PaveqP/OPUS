import "./OpenLk.scss"

function OpenLk() {
    return (
        <div className="openlk">
            <a href="">
                <div className="openlk__row">
                    <span className="openlk__text">открыт</span>
                    <img src={require("../../UI/utils/img/openlk.png")} alt="#" className="openlk__img" />
                </div>
            </a>
        </div>
    )
}

export { OpenLk }