import "./MainNotAuth.scss"
import { MainPageHeaderNotAuth } from "../../moduls/mainPageHeaderNotAuth/MainPageHeaderNotAuth"
import { MainWelcomeNotAuth } from "../../moduls/mainWelcomeNotAuth/MainWelcomeNotAuth"
import { MainSpheres } from "../../moduls/mainSpheres/MainSpheres"
import { FindTeam } from "../../moduls/findTeam/FindTeam"
import { CreateTeam } from "../../moduls/createTeam/CreateTeam"
import { Social } from "../../moduls/social/Social"
import { News } from "../../moduls/news/News"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"

function MainNotAuth() {
    return (
        <div className="mainnotauth">
            <div className="mna__headerandwelcome">
                <MainPageHeaderNotAuth />
                <MainWelcomeNotAuth />
            </div>
            <div className="mna__spheres">
                <MainSpheres />
            </div>
            <div className="mna__findteam">
                <FindTeam />
            </div>
            <div className="mna__createteam">
                <CreateTeam />
            </div>
            <div className="mna__social">
                <Social />
            </div>
            <div className="mna__news">
                <News />
            </div>
            <div className="mna__footer">
                <MainFooter/>
            </div>
        </div>
    )
}

export { MainNotAuth }