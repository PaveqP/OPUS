import "./PortfolioRating.scss"


function PortfolioRating(props) {
    return (
        <div className="portfoliorating">
            <div className="portfoliorating__number">{props.text}</div>
            <div className="portfoliorating__text">Рейтинг портфолио</div>
        </div>
    )
}

export { PortfolioRating }