import { Authorization } from "./authorization/Authorization"
import {Lk} from './lk/Lk'
import { Settings } from "./settings/Settings"
import { Registration } from "./Registration/Registration";
import { ReactDOM, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";
import { MainAuth } from "./mainAuth/MainAuth"
import { MainNotAuth } from "./mainNotAuth/MainNotAuth"
import { PortfolioPage } from "./portfolioPage/PortfolioPage"
import { ProjectsPage } from "./projectsPage/ProjectsPage"
import "../pages/App.scss"
import { useDispatch, useSelector } from "react-redux";
import { SetAuth } from "../store/userReducer";
import { authentification } from "../actions/User";
import { Projects } from "./projects/Projects";
import { ProjectBigCard } from "../components/projectBigCard/ProjectBigCard";
import { AddProject } from "../components/addProject/AddProject";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const user = useSelector(state => state.user.currentUser)

	const dispatch = useDispatch()

	const [profile, setProfile] = useState(true)
    const [projects, setProjects] = useState(false)

	const token = localStorage.getItem('token')
	const vkToken = localStorage.getItem('vkToken')

	// console.log(isAuth, "auth state from APP")
	 console.log(user, 'user from APP')
	// console.log(vkToken, 'vktoken from app')
	//console.log(token)
	console.log(localStorage.getItem('currentProjectInfo'))

	useEffect(() => {

		if (localStorage.getItem('token'))
		{
			dispatch(SetAuth(authentification()))
		}
		if (localStorage.getItem('vkToken')){
			dispatch(SetAuth(user))
		}

	}, [])
  
  return (
    <>
    <HashRouter>

      <div className="App">
			{ !isAuth ?
				<Routes>
					<Route path="/registration" element={<Registration/>}/>
					<Route path="/login" element={<Authorization/>}/>
					<Route path="/" element={<MainNotAuth/>} />
				</Routes>
				:
				<Routes>
					<Route exact path="/" element={<MainAuth/>}/>
					<Route exact path="/cabinet" element={<Lk profile={profile} setProfile={setProfile} projects={projects} setProjects={setProjects}/>}/>
					<Route exact path="/projects" element={<Projects profile={profile} setProfile={setProfile} projects={projects} setProjects={setProjects}/>}/>
					<Route exact path="/design" element={<PortfolioPage currentpage='design'/>}/>
					<Route exact path="/development" element={<PortfolioPage currentpage='development'/>}/>
					<Route exact path="/analytics" element={<PortfolioPage currentpage='analytics'/>}/>
					<Route exact path="/media" element={<PortfolioPage currentpage='media'/>}/>
					<Route exact path="/texts" element={<PortfolioPage currentpage='texts'/>}/>
					<Route exact path="/allprojects" element={<ProjectsPage currentpage='development'/>}/>
					<Route exact path="/project-info/:id" element={
						<ProjectBigCard 
							img={localStorage.getItem('currentProjectInfo') ? localStorage.getItem('currentProjectInfo').img : require('../UI/utils/img/bigProjectImage.png')} 
							description={localStorage.getItem('currentProjectInfo') ? localStorage.getItem('currentProjectInfo').description : ''}
							tag={'Дизайн'} 
							type={'Некоммерческий'} 
							date={'Старт: 24.08.2023'} 
							title={localStorage.getItem('currentProjectInfo') ? localStorage.getItem('currentProjectInfo').title : '1111'}
							need_list={['Дизайнер', 'Видео специалист']}
							contacts={['+792165432100', 'https://t.me/OpusIt']}
							links={['https://t.me/OpusIt', 'https://t.me/OpusIt', 'https://t.me/OpusIt']}
						/>}/>
					<Route path="/addproject" element={<AddProject/>}/>
					<Route path="/generalsettings" element={<Settings type='general'/>}/>
					<Route path="/personalsettings" element={<Settings type='personal'/>}/>
					<Route path="/profilesettings" element={<Settings type='profile'/>}/>
					<Route path="/login" element={<Navigate replace to="/" />} />
					<Route path="/registration" element={<Navigate replace to="/" />} />
				</Routes>
			}
		
      </div>

    </HashRouter>
    </>
  );
}

export default App;