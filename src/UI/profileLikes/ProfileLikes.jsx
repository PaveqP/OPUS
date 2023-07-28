import "./ProfileLikes.scss"


function ProfileLikes(props) {
    return (
        <div className="profilelikes">
            <div className="profilelikes__number">{props.text}</div>
            <div className="profilelikes__text">Понравился профиль</div>
        </div>
    )
}

export { ProfileLikes }