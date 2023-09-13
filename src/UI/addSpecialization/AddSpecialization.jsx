import "./AddSpecialization.scss"

function AddSpecialization({text}) {
    return (
        <div className="addspecialization">
            <button className="addspecialization__button">{text}</button>
        </div>
    )
}

export { AddSpecialization }