import "./AddAbility.scss"

function AddAbility() {
    return (
        <div className="addability">
            <button className="addability__button">
                <img alt="#" src={require("../../UI/utils/img/plus.png")} />
            </button>
        </div>
    )
}

export { AddAbility }