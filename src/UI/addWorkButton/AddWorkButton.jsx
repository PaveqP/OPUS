import "./AddWorkButton.scss"
import { useState } from "react"
import { AddWork } from "../../moduls/addWork/AddWork"

function AddWorkButton({setShowModal, showModal}) {

    
    
    return (
        <div className="addworkbutton" onClick={() => setShowModal(!showModal)}>
            <button className="addworkbutton__button">
                <img src={require("../../UI/utils/img/addwork.png")} alt="#" />
            </button>
        </div>
    )
}

export { AddWorkButton }
