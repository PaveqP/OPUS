import "./MainRegistration.scss"
import { RegistrationForm } from "../../components/registrationForm/RegistrationForm"

function MainRegistration() {
    return (
        <div className="mainreg">
            <div className="mainreg__row">
                <div className="mainreg__textreg">
                    <div className="textreg__row">
                        <div className="textreg__title">
                            Возможность
                            <div className="textreg__description">
                                Хранить и отслеживать свое портфолио<br />
                                в удобном месте
                            </div>
                        </div>
                        <div className="textreg__title">
                            Доступ
                            <div className="textreg__description">
                                К огромной базе работ и знаний других<br />
                                пользователей
                            </div>
                        </div>
                        <div className="textreg__title">
                            Популярность
                            <div className="textreg__description">
                                Ваших работ в сообществе
                            </div>
                        </div>
                        <div className="textreg__title">
                            Успех
                            <div className="textreg__description">
                                Вашего творчества и плодотворного труда,<br />
                                подтвержденный профессионалами
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainreg__stick">
                </div>
                <div className="mainreg__form">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}

export { MainRegistration }