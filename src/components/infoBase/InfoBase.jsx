import "./InfoBase.scss"
import { BaseData } from "../baseData/BaseData"
import { PortfolioLikes } from "../../UI/portfolioLikes/PortfolioLikes"
import { UploadedWorks } from "../../UI/uploadedWorks/UploadedWorks"
import { PortfolioRating } from "../../UI/portfolioRating/PortfolioRating"

function InfoBase() {
    return (
        <div className="infobase">
            <div className="base__row">
                <div className="base__data">
                    <BaseData
                        avatar={require("../../UI/utils/img/Putin.png")}
                        login={"Сherep_2003"}
                        name={"Павел"}
                        age={"19 лет"}
                        city={"Санкт-Петербург"}
                        exp={"1 год"}
                    />
                </div>
                <div className="base_stat">
                    <div className="stat__row">
                        <div className="stat__likes">
                            <PortfolioLikes number={"12"} />
                        </div>
                        <div className="stat__uploaded">
                            <UploadedWorks number={"25"} />
                        </div>
                        <div className="stat__rating">
                            <PortfolioRating number={"10"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="base__edit">
                <button className="edit">Редактировать профиль</button>
            </div>
        </div>
    )
}

export { InfoBase }