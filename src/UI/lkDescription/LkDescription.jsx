import "./LkDescription.scss"


function LkDescription(props) {
    return (
        <div className="lkdescription">
            <div className="description__title">описание</div>
            <div className="description__text">
                {props.text}
            </div>
        </div>
    )
}

export { LkDescription }