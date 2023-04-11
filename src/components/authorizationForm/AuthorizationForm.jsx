import "../../components/authorizationForm/AuthorizationForm.scss"

function AuthorizationForm() {
    return (
        <div className="form">
            <div className="form__title">
                Авторизация
            </div>
            <div className="form__main">
                <input
                    className="userName"
                    type="text"
                    name="userName"
                    placeholder="логин"
                />
                <br />
                <input
                    className="userPass"
                    type="password"
                    name="userPass"
                    placeholder="пароль"
                />
                <br />
                <button className="autho__button">ВОЙТИ</button>
            </div>

        </div>
    )

}

export { AuthorizationForm }