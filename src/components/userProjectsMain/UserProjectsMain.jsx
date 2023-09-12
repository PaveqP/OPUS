import { useSelector } from "react-redux"
import "./UserProjectsMain.scss"

import { Link } from "react-router-dom"

function UserProjectsMain(props) {

    const user = useSelector(state => state.user.currentUser)

    return (
        <div className="userprojectmain">
            <div className="upm__container">
                <div className="upm__column">
                    { user.projects && user.projects.length > 0 ?
                        <>
                            <div className="upm__title">Ваши проекты:</div>
                            <div className="upm__number">{user.projects.length}</div>
                            <div className="upm__descrition">Вам ещё есть куда расти!</div>
                            <Link to='/addproject'>
                                <div className="upm__add">
                                    <button className="upm-add__button">Добавить проект</button>
                                </div>
                            </Link>
                            
                        </>
                        :
                        user.works && user.works.length > 0 ?
                        <>
                            <div className="upm__title">Ваши работы:</div>
                            <div className="upm__number">{user.works.length}</div>
                            <div className="upm__descrition">Отличный результат!</div>
                            <Link to='/cabinet'>
                                <div className="upm__add">
                                    <button className="upm-add__button">Добавить работу</button>
                                </div>
                            </Link>
                            
                        </>
                        :
                        <>
                            <div className="upm__title">Ваши проекты:</div>
                            <div className="upm__number">0</div>
                            <div className="upm__descrition">Упс, кажется тут пусто, добавьте проект или работу</div>
                            <Link to='/addproject'>
                                <div className="upm__add">
                                    <button className="upm-add__button">Добавить проект</button>
                                </div>
                            </Link>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export { UserProjectsMain }
