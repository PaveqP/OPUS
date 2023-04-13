import "./MainAuthorization.scss"
import { AuthorizationForm } from "../../components/authorizationForm/AuthorizationForm"

function MainAuthorization() {
    return (
        <div className="main">
            <div className="main__row">
                <div className="main__text">
                    <div className="text__row">
                        <div className="text__title">
                            Возможность
                            <div className="text__description">
                                Хранить и отслеживать свое портфолио<br />
                                в удобном месте
                            </div>
                        </div>
                        <div className="text__title">
                            Доступ
                            <div className="text__description">
                                К огромной базе работ и знаний других<br />
                                пользователей
                            </div>
                        </div>
                        <div className="text__title">
                            Популярность
                            <div className="text__description">
                                Ваших работ в сообществе
                            </div>
                        </div>
                        <div className="text__title">
                            Успех
                            <div className="text__description">
                                Вашего творчества и плодотворного труда,<br />
                                подтвержденный профессионалами
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__stick"></div>
                <div className="main__form">
                    <AuthorizationForm />
                </div>
            </div>
        </div>
    )
}

export { MainAuthorization }