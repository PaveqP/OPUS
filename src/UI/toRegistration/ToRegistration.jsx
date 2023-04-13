import "./ToRegistration.scss"

function ToRegistartion() {
    return (
        <div className="toregistration">
            <a href="">
                <span className="toregistration__text">Регистрация</span>
                <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toregistration__img" />
            </a>
        </div>
    )
}

export { ToRegistartion }