import './MainSpheres.scss'
import { Link } from 'react-router-dom'

function MainSpheres() {
    return (
        <div className="mainspheres" id='spheres'>
            <div className="ms__container">
                <div className="ms__title">Сферы развития</div>
                
                <div className="ms__main">
                    <div className="ms__main-row">
                        <div className="ms__main-left">
                            <Link to='/design'>
                                <button className="ms__main-design">
                                    <img src={require("../../UI/utils/img/design.png")} alt="" className="ms__design-img"/>
                                    <div className="ms__design-text1">01</div>
                                    <div className="ms__design-text2">дизайн</div>
                                </button>
                            </Link>
                        </div>
                        <div className="ms__main-right">
                            <div className="ms__right-row">
                                <Link to='/development'>
                                    <button className="ms__main-dev">
                                        <img src={require("../../UI/utils/img/dev.png")} alt="" className="ms__dev-img"/>
                                        <div className="ms__dev-text1">02</div>
                                        <div className="ms__dev-text2">разра-<br/>ботка</div>
                                    </button>
                                </Link>
                                <Link to='/analytics'>
                                    <button className="ms__main-ab">
                                        <img src={require("../../UI/utils/img/ab.png")} alt="" className="ms__ab-img"/>
                                        <div className="ms__ab-text1">04</div>
                                        <div className="ms__ab-text2">аналитика<br/>бизнес</div>
                                    </button>
                                </Link>
                                <Link to='/media'>
                                    <button className="ms__main-av">
                                        <img src={require("../../UI/utils/img/av.png")} alt="" className="ms__av-img"/>
                                        <div className="ms__av-text1">03</div>
                                        <div className="ms__av-text2">аудио<br/>видео</div>
                                    </button>
                                </Link>
                                <Link to='/texts'>
                                    <button className="ms__main-tt">
                                        <img src={require("../../UI/utils/img/tt.png")} alt="" className="ms__tt-img"/>
                                        <div className="ms__tt-text1">05</div>
                                        <div className="ms__tt-text2">тексты<br/>переводы</div>
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

export {MainSpheres}
