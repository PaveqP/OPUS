import "./UploadedWorks.scss"


function UploadedWorks(props) {
    return (
        <div className="uploadedworks">
            <div className="uploadedworks__number">{props.text}</div>
            <div className="uploadedworks__text">Работ загружено</div>
        </div>
    )
}

export { UploadedWorks }