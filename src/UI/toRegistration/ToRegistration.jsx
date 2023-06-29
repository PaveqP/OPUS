import "./ToRegistration.scss"

function ToRegistration() {
    return (
        <div className="toregistration">
            <a href="">
                <div className="toregistration__row">
                    <span className="toregistration__text">Регистрация</span>
                    <img src={require("../../UI/utils/img/arrowright.png")} alt="#" className="toregistration__img" />
                </div>
            </a >
        </div >
    )
}

export { ToRegistration }