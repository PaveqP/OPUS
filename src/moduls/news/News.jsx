import "./News.scss"
import { NewsCard } from "../../components/newsCard/NewsCard"
import newsData from '../../data/newsData'
import { useState } from "react"
import { useEffect } from "react"

function News() {

    const [index, setIndex] = useState(0)
    const [timer, setTimer] = useState(10000)

    const handleScroller = (vector) => {
        if (vector === 'right'){
            if (index + 1 < newsData.length){
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
            //setTimer(10000)
        }
        if (vector === 'left'){
            if (index - 1 >= 0){
                setIndex(index - 1)
            } else {
                setIndex(newsData.length - 1)
            }
            //setTimer(10000)
        }
    }

    // const autoScroller = () => {
    //     setInterval(() => handleScroller('right'), timer)
    // }

    // useEffect(() => {
    //     autoScroller()
    // })


    return (
        <div className="news" id="news">
            <div className="n__container1">
                <div className="n__container2">
                    <div className="n__title">Новости</div>
                    <div className="n__main">
                        <div className="n__main-row">
                            <button className="n__main-previous" onClick={() => handleScroller('left')}>
                                <img src={require("../../UI/utils/img/previousnews.png")} alt="#"/>
                            </button>
                            <div className="n__main-newscard">
                                <div className="news__scroller"> 
                                    <NewsCard
                                        img={newsData[index] && newsData[index].img}
                                        text={newsData[index] && newsData[index].text}
                                        link={newsData[index] && newsData[index].link}
                                    />
                                </div>
                            </div>
                            <button className="n__main-next" onClick={() => handleScroller('right')}>
                                <img src={require("../../UI/utils/img/nextnews.png")} alt="#"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {News}
