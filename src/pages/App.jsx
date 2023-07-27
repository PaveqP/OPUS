import { Authorization } from "./authorization/Authorization"
import { Registration } from "./Registration/Registration";
import { ReactDOM, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "../pages/App.scss"
import { useDispatch, useSelector } from "react-redux";
import { Main } from "./main/Main";
import { SetAuth } from "../store/userReducer";
import { authentification } from "../actions/User";
import {Lk} from './lk/Lk'

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const user = useSelector(state => state.user.currentUser)
	const dispatch = useDispatch()

	const token = localStorage.getItem('token')
	const vkToken = localStorage.getItem('vkToken')
	console.log(isAuth, "auth state from APP")
	console.log(user, 'user from APP')
	console.log(vkToken, 'vktoken from app')

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
    <BrowserRouter>

      <div className="App">
			{ !isAuth ?
				<Routes>
				<Route path="/registration" element={<Registration/>}/>
				<Route path="/login" element={<Authorization/>}/>
				<Route path="/" element={<Navigate replace to="/login" />} />
				</Routes>
				:
				<Routes>
				<Route exact path="/" element={<Lk/>}/>
				<Route path="/login" element={<Navigate replace to="/" />} />
				<Route path="/registration" element={<Navigate replace to="/" />} />
				</Routes>
			}
		
      </div>

    </BrowserRouter>
    </>
  );
}

export default App;
