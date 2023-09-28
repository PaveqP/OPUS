import "./MainAuth.scss"
import { MainPageHeaderAuth } from "../../moduls/mainPageHeaderAuth/MainPageHeaderAuth"
import { MainWelcomeAuth } from "../../moduls/mainWelcomeAuth/MainWelcomeAuth"
import { MainSpheres } from "../../moduls/mainSpheres/MainSpheres"
import { FindTeam } from "../../moduls/findTeam/FindTeam"
import { CreateTeam } from "../../moduls/createTeam/CreateTeam"
import { Social } from "../../moduls/social/Social"
import { News } from "../../moduls/news/News"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"

function MainAuth() {
    return (
        <div className="mainauth">
            <div className="ma__headerandwelcome">
                <MainPageHeaderAuth />
                <MainWelcomeAuth />
            </div>
            <div className="ma__spheres">
                <MainSpheres />
            </div>
            {/* <div className="ma__findteam">
                <FindTeam />
            </div> */}
            <div className="ma__createteam">
                <CreateTeam />
            </div>
            <div className="ma__social">
                <Social />
            </div>
            <div className="ma__news">
                <News />
            </div>
            <div className="ma__footer">
                <MainFooter/>
            </div>
        </div>
    )
}


export { MainAuth }
