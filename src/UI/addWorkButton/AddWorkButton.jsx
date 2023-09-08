import "./AddWorkButton.scss"
import { useState } from "react"
import { AddWork } from "../../moduls/addWork/AddWork"

function AddWorkButton({setShowModal, showModal}) {

      function goTop() {
        setShowModal(!showModal)
        // пока не вернулись в начало страницы
        if (window.pageYOffset > 0) {
          // скроллим наверх
          window.scrollBy(0, -25); // второй аргумент - скорость
          setTimeout(goTop, 0); // входим в рекурсию
        }
      }
    
    return (
        <div className="addworkbutton" onClick={() => goTop()}>
            <button className="addworkbutton__button">
                <img src={require("../../UI/utils/img/addwork.png")} alt="#" />
            </button>
        </div>
    )
}

export { AddWorkButton }
