import "./ProfileFullness.scss"


function ProfileFullness(props) {
    return (
        <div className="profilefullness">
            <div className="profilefullness__number">{props.text}</div>
            <div className="profilefullness__text">Заполненность профиля</div>
        </div>
    )
}

export { ProfileFullness }