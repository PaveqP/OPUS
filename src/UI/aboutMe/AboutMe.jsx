import "./AboutMe.scss"

function AboutMe(props) {
    return (
        <div className="aboutme">
            <textarea name="" id="" readOnly className="aboutme__main" placeholder="Добавьте информацию о себе в профиль">{props.text}</textarea>
        </div>
    )
}

export { AboutMe }