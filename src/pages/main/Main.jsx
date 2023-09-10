import "./Main.scss"
import { MainPageHeader } from "../../moduls/mainPageHeader/MainPageHeader"
import { MainWelcome } from "../../moduls/mainWelcome/MainWelcome"
import { MainSpheres } from "../../moduls/mainSpheres/MainSpheres"
import { FindTeam } from "../../moduls/findTeam/FindTeam"
import { CreateTeam } from "../../moduls/createTeam/CreateTeam"
import { Social } from "../../moduls/social/Social"
import { News } from "../../moduls/news/News"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"

function Main() {
    return (
        <div className="Main">
            <div className="main__headerandwelcome">
                <MainPageHeader />
                <MainWelcome />
            </div>
            <div className="main__spheres">
                <MainSpheres />
            </div>
            <div className="main__findteam">
                <FindTeam />
            </div>
            <div className="main__createteam">
                <CreateTeam />
            </div>
            <div className="main__social">
                <Social />
            </div>
            <div className="main__news">
                <News />
            </div>
            <div className="main__footer">
                <MainFooter/>
            </div>
        </div>
    )
}

export { Main }
