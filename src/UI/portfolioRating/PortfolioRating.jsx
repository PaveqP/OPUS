import "./PortfolioRating.scss"


function PortfolioRating(props) {
    return (
        <div className="portfoliorating">
            <div className="rating__row">
                <div className="rating__number">
                    {props.number}
                </div>
                <div className="rating__text">
                    Рейтинг <br /> портфолио
                </div>
            </div>
        </div>
    )
}

export { PortfolioRating }