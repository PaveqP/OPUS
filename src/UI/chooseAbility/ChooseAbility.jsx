import "./ChooseAbility.scss"

function ChooseAbility() {
    return (
        <div className="chooseability">
            <select className="chooseability__select">
                <option selected className="chooseability__option">Выберите</option>
            </select>
        </div>
    )
}

export { ChooseAbility }
