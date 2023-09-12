import "./OpusUsers.scss"

export default function OpusUsers(props) {
    return (
        <div className="opususers">
            <div className="ou__text">
                <span className="ou__text-num">{props.number}</span> участников уже в OPUS
            </div>
        </div>
    )
}

export {OpusUsers}
