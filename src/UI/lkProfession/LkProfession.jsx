import "./LkProfession.scss"


function LkProfession(props) {
    return (
        <div className="lkprofession">
            <div className="profession__title">
                {props.title}
            </div>
        </div>
    )
}

export { LkProfession }