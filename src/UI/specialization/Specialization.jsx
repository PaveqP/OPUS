import "./Specialization.scss"

function Specialization(props) {
    return (
        <div className="specialization">
            <div className="specialization__main">{props.text}</div>
        </div>
    )
}

export { Specialization }