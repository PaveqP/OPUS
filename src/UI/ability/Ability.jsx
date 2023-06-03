import "./Ability.scss"


function Ability(props) {
    return (
        <div className="ability">
            <div className="ability__text">
                {props.text}
            </div>
        </div>
    )
}

export { Ability }