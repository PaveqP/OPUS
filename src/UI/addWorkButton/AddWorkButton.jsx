import "./AddWorkButton.scss"

function AddWorkButton() {
    return (
        <div className="addworkbutton">
            <button className="addworkbutton__button">
                <img src={require("../../UI/utils/img/addwork.png")} alt="#" />
            </button>
        </div>
    )
}

export { AddWorkButton }
