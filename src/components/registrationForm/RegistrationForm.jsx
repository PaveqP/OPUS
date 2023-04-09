import "../../components/registrationForm/RegistrationForm.scss"

function RegistrationForm() {
    return (
        <div className="form">
            <div className="form__title">
                Регистрация
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
                <button className="reg__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>

        </div>
    )

}

export { RegistrationForm }