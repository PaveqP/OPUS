import "./ToAuthorization.scss"

function ToAuthorization() {
    return (
        <div className="toauthorization">
            <a href="">
                <div className="toauthorization__row">
                    <span className="toauthorization__text">Войти</span>
                    <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toauthorization__img" />
                </div>
            </a>
        </div>
    )
}

export { ToAuthorization }