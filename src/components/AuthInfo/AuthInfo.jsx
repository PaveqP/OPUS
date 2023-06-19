import "./AuthInfo.scss"
import { Link } from "react-router-dom"

function AuthInfo() {
    return (
        <div className="authinfo">
            <div className="authinfo__row" >
                <div className="authinfo__header" >
                    <div className="authinfo-header__text">
                        О проекте
                    </div>
                </div >
                <div className="authinfo__main">
                    <div className="authinfo-main__row">
                        <div className="authinfo-main__title">
                            Сервис OPUS это:
                        </div>
                        <div className="authinfo-main__name">
                            Возможность
                            <div className="authinfo-main__description">
                                Хранить и отслеживать свое портфолио<br />
                                в удобном месте
                            </div>
                        </div>
                        <div className="authinfo-main__name">
                            Доступ
                            <div className="authinfo-main__description">
                                К огромной базе работ и знаний других<br />
                                пользователей
                            </div>
                        </div>
                        <div className="authinfo-main__name">
                            Популярность
                            <div className="authinfo-main__description">
                                Ваших работ в сообществе
                            </div>
                        </div>
                        <div className="authinfo-main__name">
                            Успех
                            <div className="authinfo-main__description">
                                Вашего творчества и плодотворного труда,<br />
                                подтвержденный профессионалами
                            </div>
                        </div>
                    </div>
                </div>
                <div className="authinfo__footer">
                    <div className="authinfo-footer__text">
                        ОПУС 2023. Сообщить о проблеме. Предложение о сотрудничестве. Контакты разработчиков.
                    </div>
                </div>
            </div >
        </div >
    )
}

export { AuthInfo }