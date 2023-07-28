import "./Avatar.scss"

function Avatar(props) {
    return (
        <div className="avatar">
            <img alt="#" src={props.img} />
        </div>
    )
}

export { Avatar }