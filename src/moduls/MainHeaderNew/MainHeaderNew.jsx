import "./MainHeaderNew.scss"
import { Logo } from "../../UI/logo/Logo"

import { Link } from "react-router-dom"
import { logout } from '../../store/userReducer'
import { useDispatch, useSelector } from 'react-redux'

function MainHeaderNew() {

    const user = useSelector(state => state.user.currentUser)

    const ScrollToMain = (id) => {

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <div className="mainheadernew">
            <div className="mhn__container">
                <div className="mhn__row">
                    <Link to='/'>
                        <div className="mhn__logo">
                            <Logo />
                        </div>
                    </Link>
                    <div className="mhn__menu">
                        <div className="mhn-menu__row">
                            <Link to='/'><div className="mhn-menu__spheres" onClick={async () => await ScrollToMain('#spheres')}>Сферы развития</div></Link>
                            <Link to='/'><div className="mhn-menu__find" onClick={async () => await ScrollToMain('#findTeam')}>Найти команду</div></Link>
                            <Link to='/'><div className="mhn-menu__create" onClick={async () => await ScrollToMain('#createTeam')}>Создать команду</div></Link>
                            <Link to='/'><div className="mhn-menu__news" onClick={async () => await ScrollToMain('#news')}>Новости</div></Link>
                            {/* <a href="#" className="mhn-menu__contacs">Контакты</a> */}
                        </div>
                    </div>
                    <div className="mhn__lk">
                        <div className="mhn-lk__row">
                            <div className="mhn-lk__portfolio">
                            <Link to={user && `/cabinet/` + user.id}><button className="mhn-lk__portfoliobutton">Пополнить портфолио</button></Link>
                            </div>
                            <Link to={user && `/cabinet/` + user.id}>
                                <div className="mhn-lk__lk">
                                    <button className="mhn-lk__lkbutton">
                                        <img src={require("../../UI/utils/img/lkblack.png")} alt="#" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MainHeaderNew}
