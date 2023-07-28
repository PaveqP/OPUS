import "./SkillsInfo.scss"
import { AddSpecialization } from "../../UI/addSpecialization/AddSpecialization"
import { Specialization } from "../../UI/specialization/Specialization"
import { AboutMe } from "../../UI/aboutMe/AboutMe"
import { AddAbility } from "../../UI/addAbility/AddAbility"
import { Ability } from "../../UI/ability/Ability"


function SkillsInfo() {
    return (
        <div className="skillsinfo">
            <div className="skillsinfo__row">
                <div className="skillsinfo__specialization">
                    <div className="specialization__text">
                        <div className="specialization-text__row">
                            <div className="specialization-text__title">
                                Специализация:
                            </div>
                            <button className="specialization-text__settings">
                                <img alt="#" src={require("../../UI/utils/img/settings.png")} />
                            </button>
                        </div>
                    </div>
                    <div className="specialization__add">
                        <div className="specialization-add__row">
                            <AddSpecialization />
                        </div>
                    </div>
                </div>
                <div className="skillsinfo__aboutme">
                    <div className="aboutme__title">
                        О себе
                    </div>
                    <div className="aboutme__text">
                        <AboutMe />
                    </div>
                </div>
                <div className="skillsinfo__abilities">
                    <div className="abilities__text">
                        <div className="abilities-text__row">
                            <div className="abilities-text__title">
                                Навыки
                            </div>
                            <button className="abilities-text__settings">
                                <img alt="#" src={require("../../UI/utils/img/settings.png")} />
                            </button>
                        </div>
                    </div>
                    <div className="abilities__add">
                        <div className="abilities-add__row">
                            <AddAbility />
                        </div>
                    </div>
                </div>
                <div className="skillsinfo__download">
                    <button className="download__button">
                        Скачать резюме
                    </button>
                </div>
            </div>
        </div>
    )
}

export { SkillsInfo }