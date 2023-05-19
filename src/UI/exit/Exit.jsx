import "./Exit.scss"

function Exit() {
    return (
        <div className="exit">
            <a href="">
                <div className="exit__row">
                    <span className="exit__text">Выйти</span>
                    <img src={require("../../UI/utils/img/exit.png")} alt="#" className="exit__img" />
                </div>
            </a>
        </div>
    )
}

export { Exit }