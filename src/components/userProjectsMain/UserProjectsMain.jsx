import "./UserProjectsMain.scss"

function UserProjectsMain(props) {
    return (
        <div className="userprojectmain">
            <div className="upm__container">
                <div className="upm__column">
                    <div className="upm__title">Ваши проекты:</div>
                    <div className="upm__number">{props.number}</div>
                    <div className="upm__descrition">{props.text}</div>
                    <div className="upm__add">
                        <button className="upm-add__button">Добавить проект</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserProjectsMain }
