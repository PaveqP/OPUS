import "../../UI/help/Help.scss"

function Help() {
    return (
        <div className="help">
            <a href="">
                <img src={require("../../UI/utils/img/help.png")} alt="#" className="help__img" />
                <span className="help__text">справка</span>
            </a>
        </div>
    )
}

export { Help }
