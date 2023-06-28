import "./Category.scss"

function Category(props) {
    return (
        <div className="category">
            <button className="category__button">{props.text}</button>
        </div>
    )
}

export { Category }