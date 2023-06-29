import "./OpenLk.scss"

function OpenLk() {
    return (
        <div className="openlk">
            <a href="">
                <div className="openlk__row">
                    <div className="openlk__text">открыт</div>
                    <div className="openlk__img">
                        <img src={require("../../UI/utils/img/openlk.png")} alt="#" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export { OpenLk }