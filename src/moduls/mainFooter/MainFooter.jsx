import "./MainFooter.scss"
import { Logo } from "../../UI/logo/Logo"

function MainFooter() {
    return (
        <div className="mainfooter">
            <div className="mainfooter__container">
                <div className="mainfooter__row">
                    <div className="mainfooter__basic">
                        <div className="basic__row">
                            <div className="basic__logo">
                                <Logo />
                            </div>
                            <div className="basic__main">
                                <p className="basic__point"></p>
                                <div className="basic-main">главная</div>
                            </div>
                            <div className="basic__lk">
                                <p className="basic__point"></p>
                                <div className="basic-lk">личный кабинет</div>
                            </div>
                            <div className="basic__information">
                                <p className="basic__point"></p>
                                <div className="basic-information">информация</div>
                            </div>
                        </div>
                    </div>
                    <div className="mainfooter__contacs">
                        <div className="contacs__row">
                            <div className="contacs__primary">Контакты</div>
                            <div className="contacs__1">главная</div>
                            <div className="contacs__2">личный кабинет</div>
                            <div className="contacs__3">информация</div>
                        </div>
                    </div>
                    <div className="mainfooter__team">
                        <div className="team__row">
                            <div className="team__primary">Команда</div>
                            <div className="team__1">главная</div>
                            <div className="team__2">личный кабинет</div>
                            <div className="team__3">информация</div>
                        </div>
                    </div>
                    <div className="mainfooter__cooperation">
                        <div className="cooperation__row">
                            <div className="cooperation__primary">Сотрудничество</div>
                            <div className="cooperation__1">главная</div>
                            <div className="cooperation__2">личный кабинет</div>
                            <div className="cooperation__3">информация</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainFooter }