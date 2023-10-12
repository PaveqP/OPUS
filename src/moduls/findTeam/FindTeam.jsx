import "./FindTeam.scss"
import { FindTeamCard } from "../../components/findTeamCard/FindTeamCard"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUsersProjects } from "../../actions/Projects"

function FindTeam() {

    const auth = useSelector(state => state.user.isAuth)

    useEffect(() => {
        auth &&
        getUsersProjects()
    }, [])

    const projects = useSelector(state => state.user.projects)

    const [index, setIndex] = useState(1)
    const [index2, setIndex2] = useState(2)

    function setIntervalIndex(currentIndex){
        if (currentIndex + 1 > projects.length){
            setIndex(1)
        }
        
    }
    function setIntervalIndex2(currentIndex){
        if (currentIndex + 1 > projects.length){
            setIndex2(2)
        }
        
    }

    useEffect(() => {
        setIntervalIndex(index)
        setIntervalIndex2(index2)
        let slider = setInterval(() => setIndex(index + 1), 20000)
        let slider2 = setInterval(() => setIndex2(index2 + 1), 20000)
        return () => {
            clearInterval(slider)
            clearInterval(slider2)
        }
    }, [index, index2])

    return (
        <div className="findteam" id="findTeam">
            <div className="ft__container">
                <div className="ft__header">
                    <div className="ft__header-row">
                        <div className="ft__header-title">Актуальные проекты</div>
                        {auth ?
                            <Link to='/allprojects'>
                                <button className="ft__header-button">Найти участника <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ft__button-arrow"/> </button>
                            </Link>
                            :
                            <Link to='/login'>
                                <button className="ft__header-button">Найти участника <img src={require("../../UI/utils/img/findteamarrow.png")} alt="#" className="ft__button-arrow"/> </button>
                            </Link>
                        }
                        
                    </div>
                </div>
                <div className="ft__main">
                    <div className="ft__main-row">
                        <div className="ft__main-card1">
                            {projects.length > 0 ?
                                projects.map((element, elementIndex) => {
                                    if(elementIndex + 1 === index){
                                        return(
                                        <FindTeamCard 
                                            avatar={element.imageUrl}
                                            title={element.name}
                                            //specialization={"Дизайн"}
                                            //money={"Коммерческий"}
                                            wanted1={"Дизайнер"}
                                            //wanted2={""}
                                            //wanted3={""}
                                            goal={element.mission}
                                            id={element.id}
                                            key={element.id}
                                        />
                                        )
                                    }
                                })
                                :
                                (
                                    <FindTeamCard 
                                        avatar={require('../../UI/utils/img/projectavatar1.png')}
                                        title={'NFTgo'}
                                        //specialization={"Дизайн"}
                                        //money={"Коммерческий"}
                                        wanted1={"Дизайнер"}
                                        //wanted2={""}
                                        //wanted3={""}
                                        goal={'Создать платформу для обучения начинающиъ 3D-дизайнеров, которые хотят попробовать себя в NFT'}
                                        id={null}
                                        key={1}
                                    />
                                )
                            }
                            
                        </div>
                        <div className="ft__main-card2">
                            {projects.length > 0 ?
                                projects.map((element, elementIndex) => {
                                    if(elementIndex + 1 === index2){
                                        return(
                                        <FindTeamCard 
                                            avatar={element.imageUrl}
                                            title={element.name}
                                            //specialization={"Дизайн"}
                                            //money={"Коммерческий"}
                                            wanted1={"Дизайнер"}
                                            //wanted2={""}
                                            //wanted3={""}
                                            goal={element.mission}
                                            id={element.id}
                                            key={element.id}
                                        />
                                        )
                                    }
                                })
                                :
                                (
                                    <FindTeamCard 
                                            avatar={require('../../UI/utils/img/projectavatar2.png')}
                                            title={'DoneUNI'}
                                            //specialization={"Дизайн"}
                                            //money={"Коммерческий"}
                                            wanted1={"Дизайнер"}
                                            //wanted2={""}
                                            //wanted3={""}
                                            goal={'Создать приложение, где ИИ помогает студентам с курсовыми, исходя из данных университета прошлых лет'}
                                            id={null}
                                            key={2}
                                        />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FindTeam}
