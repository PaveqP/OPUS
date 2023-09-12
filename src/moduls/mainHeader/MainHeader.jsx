import "./MainHeader.scss"
import { Logo } from "../../UI/logo/Logo"
import { Backtomain } from "../../UI/backtomain/Backtomain"
import { Exit } from "../../UI/exit/Exit"
import { Link } from "react-router-dom"

import { logout } from '../../store/userReducer'
import { useDispatch } from 'react-redux'

function MainHeader() {

    const dispatch = useDispatch()

    const Logout = () => {
        
        dispatch(logout())

        console.log('logout called')
    }

    return (
        <div className="mainheader">
            <div className="mainheader__container">
                <div className="mainheader__row">

                    <Link to='/'>
                        <div className="mainheader__logo">
                            <Logo />
                        </div>
                    </Link>
                    
                    <div className="mainheader__navigation">
                        <div className="navigation__row">
                            <Link to='/'>
                                <div className="navigation__backtomain">
                                    <Backtomain />
                                </div>
                            </Link>
                            
                            <div className="navigation__settings">
                                <Link to='/generalsettings' className="navigation-settings__text">Настройки</Link>
                            </div>
                            <div className="navigation__help">
                                <a href="#" className="navigation-help__text">Справка</a>
                            </div>
                            <Link to='/'>
                                <div className="navigation__exit" onClick={() => Logout()}>
                                    <Exit />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainHeader }