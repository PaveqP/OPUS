import "./News.scss"
import { NewsCard } from "../../components/newsCard/NewsCard"

function News() {
    return (
        <div className="news" id="news">
            <div className="n__container1">
                <div className="n__container2">
                    <div className="n__title"><b>Новости</b> в разработке</div>
                    <div className="n__main">
                        <div className="n__main-row">
                            <button className="n__main-previous">
                                <img src={require("../../UI/utils/img/previousnews.png")} alt="#"/>
                            </button>
                            <div className="n__main-newscard">
                                <NewsCard
                                    img={require("../../UI/utils/img/news1.png")}
                                    text={'Считаем месяцы до погружения в цифру!\n\
                                    Платформа профессионального старта "ОПУС" - проект, направленный на поддержку талантливых и амбициозных студентов.\n\
                                    Сервис позволит тебе создать аккаунт в сфере:\n\
                                    - Дизайна;\n\
                                    - Разработки и программирования;\n\
                                    - Аудио\n\
                                    - и видеопродуктов;\n\
                                    - Аналитики и бизнеса;...'}
                                />
                            </div>
                            <button className="n__main-next">
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
