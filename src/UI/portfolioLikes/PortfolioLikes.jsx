import "./PortfolioLikes.scss"


function PortfolioLikes(props) {
    return (
        <div className="portfoliolikes">
            <div className="likes__row">
                <div className="likes__img">
                    <img src={require("../../UI/utils/img/like.png")} alt="#" />
                </div>
                <div className="likes__number">
                    {props.number}
                </div>
            </div>
        </div>
    )
}

export { PortfolioLikes }