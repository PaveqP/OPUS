import "../../moduls/mainRegistration/MainRegistration.scss"
import { RegistrationForm } from "../../components/registrationForm/RegistrationForm"

function MainRegistration() {
    return (
        <div className="main-reg">
            <div className="main-reg__text">
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
            <div className="main-reg__stick">
            </div>
            <div className="main-reg__form">
                <RegistrationForm />
            </div>
        </div>
    )
}

export { MainRegistration }