import "./Help.scss"

function Help() {
    return (
        <div className="help">
            <a href="">
                <div className="help__row">
                    <div className="help__img">
                        <img src={require("../../UI/utils/img/help.png")} alt="#" />
                    </div>
                    <div className="help__text">справка</div>
                </div>
            </a>
        </div>
    )
}

export { Help }
