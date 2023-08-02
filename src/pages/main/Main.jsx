import "./Main.scss"
import { MainPageHeader } from "../../moduls/mainPageHeader/MainPageHeader"
import { MainWelcome } from "../../moduls/mainWelcome/MainWelcome"

function Main() {
    return (
        <div className="Main">
            <div className="main__headerandwelcome">
                <MainPageHeader />
                <MainWelcome />
            </div>
            <div className="main__spheres">

            </div>
            <div className="main__findteam">

            </div>
            <div className="main__createteam">

            </div>
            <div className="main__social">

            </div>
            <div className="main__news">

            </div>
            <div className="main__footer">

            </div>
        </div>
    )
}

export { Main }
