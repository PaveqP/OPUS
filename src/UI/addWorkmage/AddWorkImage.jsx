import "./AddWorkImage.scss"

function AddWorkImage(handleFileChange) {
    return (
        <div className="addworkimage">
            <button className="addworkimage__button">
                <img src={require("../../UI/utils/img/addwork.png")} alt="#" />
            </button>
        </div>
    )
}

export { AddWorkImage }
