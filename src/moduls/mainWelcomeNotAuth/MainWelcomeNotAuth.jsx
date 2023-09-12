import "./MainWelcomeNotAuth.scss"
import {OpusUsers} from "../../UI/opusUsers/OpusUsers"
import { Link } from "react-router-dom"

function MainWelcomeNotAuth() {
    return (
        <div className="mainwelcomenotauth">
            <div className="mwna__container">
                <div className="mwna__column">
                    <div className="mwna__title">Найди команду <br/> вместе с нами</div>
                    <div className="mwna__information">
                        <div className="mwna__information-text1">
                            OPUS - это платформа возможностей, с нами вы найдете или 
                            сформируете собственную команду для проекта/стартапа/хакатона.<br/>
                            
                        </div>
                        <div className="mwna__information-text2">
                            Пополни портфолио и становись частью команды!
                        </div>
                        <div className="mwna__information-actions">
                            <div className="mwna__actions-row">
                                <Link to='/login'><button className="mwna__actions-add">Пополнить портфолио</button></Link>
                                <div className="mwna__actions-stat">
                                    <OpusUsers
                                        number={"132 051"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MainWelcomeNotAuth}
