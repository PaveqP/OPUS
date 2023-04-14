import "./MainAuthorization.scss"
import { AuthorizationForm } from "../../components/authorizationForm/AuthorizationForm"

function MainAuthorization() {
    return (
        <div className="mainauth">
            <div className="mainauth__row">
                <div className="mainauth__textauth">
                    <div className="textauth__row">
                        <div className="textauth__title">
                            Возможность
                            <div className="textauth__description">
                                Хранить и отслеживать свое портфолио<br />
                                в удобном месте
                            </div>
                        </div>
                        <div className="textauth__title">
                            Доступ
                            <div className="textauth__description">
                                К огромной базе работ и знаний других<br />
                                пользователей
                            </div>
                        </div>
                        <div className="textauth__title">
                            Популярность
                            <div className="textauth__description">
                                Ваших работ в сообществе
                            </div>
                        </div>
                        <div className="textauth__title">
                            Успех
                            <div className="textauth__description">
                                Вашего творчества и плодотворного труда,<br />
                                подтвержденный профессионалами
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainauth__stick"></div>
                <div className="mainauth__form">
                    <AuthorizationForm />
                </div>
            </div>
        </div>
    )
}

export { MainAuthorization }