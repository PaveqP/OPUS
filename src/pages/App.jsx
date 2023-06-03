<<<<<<< HEAD
import { Authorization } from "./authorization/Authorization"
import { Registration } from "./Registration/Registration";
import { ReactDOM, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
=======


import { Authorization } from "./authorization/Authorization"

>>>>>>> layout
import "../pages/App.scss"
import { useDispatch, useSelector } from "react-redux";
import { Main } from "./main/Main";
import { SetAuth } from "../store/userReducer";
import { authentification } from "../actions/User";

function App() {
	const isAuth = useSelector(state => state.user.isAuth)
	const user = useSelector(state => state.user.currentUser)
	const dispatch = useDispatch()

	const token = localStorage.getItem('token')
	console.log(isAuth, "from APP")
	console.log(user, 'from APP')

	useEffect(() => {
		if (localStorage.getItem('token'))
		{
			dispatch(SetAuth(authentification()))
		}
	}, [])
  
  return (

    <>
    <BrowserRouter>

      <div className="App">
	  	{!isAuth ? 
			<Routes>
				<Route path="/registration" element={<Registration/>}/>
				<Route path="/login" element={<Authorization/>}/>
				<Route path="/" element={<Navigate replace to="/login" />} />
			</Routes>
				:
			<Routes>
				<Route exact path="/" element={<Main/>}/>
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
