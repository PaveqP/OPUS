import "./NewsCard.scss"

function NewsCard(props) {
    return (
        <div className="newscard">
            <div className="nc__row">
                <div className="nc__picture"><img className="nc__picture-example" src={props.img} alt="#"/></div>
                <div className="nc__main">
                    <div className="nc__main-column">
                        <div className="nc__main-text">{props.text}</div>
                        <a className="nc__main-button" href={props.link}> Читать дальше</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {NewsCard}
