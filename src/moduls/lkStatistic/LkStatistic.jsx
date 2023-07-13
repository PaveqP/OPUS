import "./LkStatistic.scss"
import { UploadedWorks } from "../../UI/uploadedWorks/UploadedWorks"
import { ProfileLikes } from "../../UI/profileLikes/ProfileLikes"
import { PortfolioRating } from "../../UI/portfolioRating/PortfolioRating"
import { ProfileFullness } from "../../UI/profileFullness/ProfileFullness"


function LkStatistic() {
    return (
        <div className="lkstatistic">
            <div className="lkstatistic__container">
                <div className="lkstatistic__row">
                    <div className="lkstatistic__title">
                        Статистика
                    </div>
                    <div className="lkstatistic__statistic">
                        <div className="statistic__row">
                            <div className="statistic__upload">
                                <UploadedWorks text={"0"} />
                            </div>
                            <div className="statistic__likes">
                                <ProfileLikes text={"0"} />
                            </div>
                            <div className="statistic__rating">
                                <PortfolioRating text={"0"} />
                            </div>
                            <div className="statistic__fullness">
                                <ProfileFullness text={"0"} />
                            </div>
                        </div>
                    </div>
                    <div className="lkstatistic__howgenerated">
                        <a href="#" className="lkstatistic-howgenerated__text">Как формируется статистика?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { LkStatistic }