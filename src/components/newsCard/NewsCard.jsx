import "./NewsCard.scss"

function NewsCard(props) {
    return (
        <div className="newscard">
            <div className="nc__row">
                <div className="nc__picture"><img src={props.img} alt="#"/></div>
                <div className="nc__main">
                    <div className="nc__main-column">
                        <div className="nc__main-text">{props.text}</div>
                        <button className="nc__main-button">Читать дальше</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {NewsCard}
