import "./InfoSkills.scss"
import { LkProfession } from "../../UI/lkProfession/LkProfession"
import { LkDescription } from "../../UI/lkDescription/LkDescription"
import { Ability } from "../../UI/ability/Ability"


function InfoSkills() {
    return (
        <div className="infoskills">
            <div className="skills__row">
                <div className="skills__title">
                    <LkProfession
                        title={"frontend разработчик"}
                    />
                </div>
                <div className="skills__description">
                    <LkDescription
                        text={"Frontend-разработчик (frontend developer) — это специалист, который отвечает за создание пользовательского интерфейса сайта, приложения или ПО."}
                    />
                </div>
                <div className="skills__abilities">
                    <div className="abilities__title">
                        навыки
                    </div>
                    <div className="abilities__row">
                        <div className="ability__item">
                            <Ability
                                text={"HTML"}
                            />
                        </div>
                        <div className="ability__item">
                            <Ability
                                text={"CSS"}
                            />
                        </div>
                        <div className="ability__item">
                            <Ability
                                text={"JS"}
                            />
                        </div>
                        <div className="ability__item">
                            <Ability
                                text={"REACT"}
                            />
                        </div>
                        <div className="ability__item">
                            <Ability
                                text={"GIT"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { InfoSkills }