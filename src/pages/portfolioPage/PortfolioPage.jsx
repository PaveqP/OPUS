import "./PortfolioPage.scss"
import { MainFooter } from "../../moduls/mainFooter/MainFooter"
import { MainHeaderNew } from "../../moduls/MainHeaderNew/MainHeaderNew"
import { PortfolioPageProfile } from "../../components/portfolioPageProfile/PortfolioPageProfile"
import { Link } from "react-router-dom"
import { getListOfUsers } from "../../actions/User"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { User } from "@vkontakte/superappkit"

function PortfolioPage({currentpage}) {

    useEffect(() => {
        getListOfUsers()
    }, [])

    const users = useSelector(state => state.user.allUsers)
    const userModel = useSelector(state => state.user.currentUser)

    console.log(users)

    return (
        <div className="portfoliopage">
            <div className="pp__header">
                <MainHeaderNew/>
            </div>
            <div className="pp__main">
                <div className="pp__container">
                    <div className="pp__top">
                        <div className="pp__top-row">
                            <div className="pp__top-navigation">
                                <div className="pp__navigation-row">
                                    <Link to='/' className="pp__navigation-main">Главная</Link>
                                    <img src={require("../../UI/utils/img/miniarrowright.png")} alt="#" className="pp__navigation-img" />
                                    <p href="" className="pp__navigation-current">{currentpage}</p>
                                </div>
                            </div>
                            <div className="pp__top-filters">
                                <select name="" id="" className="pp__filters-select">
                                    <option value="" className="pp__filters-option" selected>Фильтровать по категориям</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pp__main">
                        <div className="pp__row">
                            {users && users.map((user) => {
                                if (userModel.id !== user.id){
                                    return (
                                        <PortfolioPageProfile
                                            avatar={user.photo}
                                            name={user.nickname ? user.nickname : user.firstname}
                                            surname={""}
                                            skill={user.skills}
                                            age={""}
                                            city={""}
                                            description={""}
                                            id={user.id}
                                        /> 
                                    )
                                }
                            }
                            )

                            }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="pp__footer">
                <MainFooter/>
            </div>
        </div>
    )
}

export {PortfolioPage}
