import "./LkStatistic.scss"
import { UploadedWorks } from "../../UI/uploadedWorks/UploadedWorks"
import { ProfileLikes } from "../../UI/profileLikes/ProfileLikes"
import { PortfolioRating } from "../../UI/portfolioRating/PortfolioRating"
import { ProfileFullness } from "../../UI/profileFullness/ProfileFullness"
import { useSelector } from "react-redux"


function LkStatistic() {

    const user = useSelector(state => state.user.currentUser)

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
                                {user.works &&
                                    <UploadedWorks text={user.works.length} />
                                }
                            </div>
                            {/* <div className="statistic__likes">
                                <ProfileLikes text={"0"} />
                            </div> */}
                            <div className="statistic__rating">
                                {user.works && user.projects &&
                                    <PortfolioRating text={(user.works.length * 0.5) + user.projects.length} />
                                }
                            </div>
                            {/* <div className="statistic__fullness">
                                <ProfileFullness text={"0"} />
                            </div> */}
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