import { Backtomain } from '../../UI/backtomain/Backtomain'
import { Exit } from '../../UI/exit/Exit'
import { Help } from '../../UI/help/Help'
import { Logo } from '../../UI/logo/Logo'
import { OpenLk } from '../../UI/openLk/OpenLk'
import { CloseLk } from '../../UI/closeLk/CloseLk'
import { Link } from 'react-router-dom'
import './HeaderLk.scss'


function HeaderLk() {
    return (
        <div className="header-lk">
            <div className="header-lk__row">
                <div className="header-lk__backtomain">
                    <Backtomain />
                </div>
                <div className="header-lk__help">
                    <Help />
                </div>
                <div className="header-lk__logo">
                    <Logo />
                </div>
                <div className="header-lk__openlk">
                    <OpenLk />
                </div>
                <Link to='/login'>
                <div className="header-lk__exit">
                    <Exit />
                </div>
                </Link>
            </div>
        </div >
    )

}

export { HeaderLk }