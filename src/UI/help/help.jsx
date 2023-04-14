<<<<<<< HEAD
import "./help.scss"
=======
import "./Help.scss"
>>>>>>> 4edefae639338c670fbf12b33b6fae3ec8456e69

function Help() {
    return (
        <div className="help">
            <a href="">
                <img src={require("../../UI/utils/img/help.png")} alt="#" className="help__img" />
                <span className="help__text">справка</span>
            </a>
        </div>
    )
}

export { Help }
