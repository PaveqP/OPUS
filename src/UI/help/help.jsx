import "./Help.scss"

function Help() {
    return (
        <div className="help">
            <a href="">
                <div className="help__row">
                    <img src={require("../../UI/utils/img/help.png")} alt="#" className="help__img" />
                    <span className="help__text">справка</span>
                </div>
            </a>
        </div>
    )
}

export { Help }
