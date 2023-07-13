import "./Work.scss"

function Work(props) {
    return (
        <div className="work">
            <div className="work__row">
                <div className="work__img">
                    <img src={props.img} alt="#" />
                </div>
                <div className="work__text">
                    <div className="work__title">{props.title}</div>
                    <div className="work__description">
                        <div className="work__description-row">
                            <div className="work__description-categories">
                                Категории: {props.categories}
                            </div>
                            <div className="work__description-statistic">
                                <div className="work__statistic-row">
                                    <div className="work__statistic-likes">
                                        <img src={require("../../UI/utils/img/worklikes.png")} alt="#" />
                                        {props.likes}
                                    </div>
                                    <div className="work__statistic-views">
                                        <img src={require("../../UI/utils/img/workviews.png")} alt="#" />
                                        {props.views}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Work }
