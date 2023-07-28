import "./Backtomain.scss"

function Backtomain() {
    return (
        <div className="backtomain">
            <a href="">
<<<<<<< HEAD
                <img src={require("../../UI/utils/img/arrowleft.png")} alt="#" className="bactomain__img" />
                <span className="backtomain__text">главная</span>
=======
                <div className="backtomain__row">
                    <div className="backtomain__img">
                        <img src={require("../../UI/utils/img/arrowleft.png")} alt="#" />
                    </div>
                    <div className="backtomain__text">Главная</div>
                </div>
>>>>>>> 5f95fedfc48ac23eed466d61e7cf90699732b076
            </a>
        </div>
    )
}

export { Backtomain }