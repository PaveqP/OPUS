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
// import React from 'react'
// import { logout } from '../../store/userReducer'
// import { useDispatch, useSelector } from "react-redux";

// function Main() {

// 	const dispatch = useDispatch()

//   const user_info = useSelector(state => state.user.currentUser)
// 	console.log(user_info, 'USER FROM MAIN')

//   return (
//     <>
//       <div>
//           <h1>{user_info.id} - ID</h1>
//           <h2>{user_info.firstname} - NAME</h2>
//           <h2>{user_info.lastname} - LASTNAME</h2>
//           <h2>{user_info.email} - MAIL</h2>
//       </div>
//       <div className="logout">
// 		<button onClick={() => dispatch(logout())}>ВЫЙТИ</button>
//       </div>
//     </>
//   )
// }

// export {Main}
