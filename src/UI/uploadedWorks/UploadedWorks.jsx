import "./UploadedWorks.scss"


function UploadedWorks(props) {
    return (
        <div className="uploadedworks">
            <div className="works__row">
                <div className="works__number">
                    {props.number}
                </div>
                <div className="works__text">
                    Работ <br /> загружено
                </div>
            </div>
        </div>
    )
}

export { UploadedWorks }