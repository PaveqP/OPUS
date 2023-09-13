import "./MainPageHeaderAuth.scss"
import { Logo } from "../../UI/logo/Logo"
import { Link } from "react-router-dom"
import { useEffect } from "react";

function MainPageHeaderAuth() {

    // useEffect(() => {
    //     const smoothLinks = document.querySelectorAll('a[href^="#"]');
    //         for (let smoothLink of smoothLinks) {
    //         smoothLink.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             const id = smoothLink.getAttribute('href');

    //             console.log(id)
        
    //             document.querySelector(id).scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         });
    //         };
    // });

    const ScrollToMain = (id) => {
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <div className="mainpageheaderauth">
            <div className="mpha__container">
                <div className="mpha__row">
                    <div className="mpha__logo">
                        <Logo />
                    </div>
                    <div className="mpha__menu">
                        <div className="mpha-menu__row">
                            <div className="mpha-menu__spheres navigate_elem" onClick={() => ScrollToMain('#spheres')}>Сферы развития</div>
                            <div className="mpha-menu__find navigate_elem" onClick={() => ScrollToMain('#findTeam')}>Найти команду</div>
                            <div className="mpha-menu__create navigate_elem" onClick={() => ScrollToMain('#createTeam')}>Создать команду</div>
                            <div className="mpha-menu__news navigate_elem" onClick={() => ScrollToMain('#news')}>Новости</div>
                            {/* <a href="#contacts" className="mpha-menu__contacs">Контакты</a> */}
                        </div>
                    </div>
                    <div className="mpha__lk">
                        <div className="mpha-lk__row">
                            <div className="mpha-lk__portfolio">
                                <Link to='/cabinet'><button className="mpha-lk__portfoliobutton">Пополнить портфолио</button></Link>
                            </div>
                            <div className="mpha-lk__lk">
                                <Link to='/cabinet'>
                                    <button className="mpha-lk__lkbutton">
                                        <img src={require("../../UI/utils/img/lk.png")} alt="#" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MainPageHeaderAuth }
