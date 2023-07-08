import "./AddWork.scss"

function AddWork() {
    return (
        <div className="addwork">
            <button className="addwork__button">
                <img src={require("../../UI/utils/img/addwork.png")} alt="#" />
            </button>
        </div>
    )
}

export { AddWork }
