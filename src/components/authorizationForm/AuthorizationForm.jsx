import "../../components/authorizationForm/AuthorizationForm.scss"

function AuthorizationForm() {
    return (
        <div className="form">
            <div className="form__row">
                <div className="form__title">
                    Авторизация
                </div>
                <div className="form__main">
                    <div className="main__row">
                        <div className="main__icon">
                            <img src={require("../../UI/utils/img/formicon.png")} alt="#"></img>
                        </div>
                        <input
                            className="main__name"
                            type="text"
                            name="userName"
                            placeholder="логин"
                        />
                        <input
                            className="main__pass"
                            type="password"
                            name="userPass"
                            placeholder="пароль"
                        />
                        <button className="main__button">ВОЙТИ</button>
                        <div className="main__or">
                            ИЛИ
                        </div>
                        <div className="main__vk">
                            <a href="">
                                <img src={require("../../UI/utils/img/vk.png")} alt="#"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { AuthorizationForm }