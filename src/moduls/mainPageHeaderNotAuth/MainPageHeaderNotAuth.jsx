import "./MainPageHeaderNotAuth.scss"
import { Logo } from "../../UI/logo/Logo"
import { Link } from "react-router-dom"

function MainPageHeaderNotAuth() {

    const ScrollToMain = (id) => {
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <div className="mainpageheadernotauth">
            <div className="mphna__container">
                <div className="mphna__row">
                    <div className="mphna__logo">
                        <Logo/>
                    </div>
                    <div className="mphna__menu">
                        <div className="mphna__menu-row">
                            <div className="mphna__menu-about navigate_elem">О нас</div>
                            <div className="mphna__menu-spheres navigate_elem" onClick={() => ScrollToMain('#spheres')}>Сферы развития</div>
                            <div className="mphna__menu-news navigate_elem" onClick={() => ScrollToMain('#news')}>Новости</div>
                            {/* <a href="#" className="mphna__menu-contacs">Контакты</a> */}
                        </div>
                    </div>
                    <div className="mphna__buttons">
                        <Link to='/registration'><button className="mphna__buttons-reg">Зарегистрироваться</button></Link>
                        <Link to='/login'><button className="mphna__buttons-enter">Войти</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {MainPageHeaderNotAuth}