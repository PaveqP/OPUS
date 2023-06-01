import "./Exit.scss"

function Exit() {
    return (
        <div className="exit">
            <a href="">
                <div className="exit__row">
                    <div className="exit__text">Выйти</div>
                    <div className="exit__img">
                        <img src={require("../../UI/utils/img/exit.png")} alt="#" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export { Exit }