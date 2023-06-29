import "./BaseData.scss"


function BaseData(props) {
    return (
        <div className="basedata">
            <div className="data__row">
                <div className="data__avatar">
                    <img className="avatar" src={props.avatar} alt="#" />
                </div>
                <div className="data__login">
                    {props.login}
                </div>
                <div className="data__name">
                    Имя: {props.name}
                </div>
                <div className="data__age">
                    Возраст: {props.age}
                </div>
                <div className="data__city">
                    Город: {props.city}
                </div>
                <div className="data__exp">
                    Опыт: {props.exp}
                </div>
            </div>
        </div>
    )
}

export { BaseData }