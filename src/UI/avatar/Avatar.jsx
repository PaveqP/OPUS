import "./Avatar.scss"

function Avatar(props) {
    return (
        <div className="avatar">
            <img alt="#" src={props.img} className="avatar__image"/>
        </div>
    )
}

export { Avatar }