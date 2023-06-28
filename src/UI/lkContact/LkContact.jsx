import "./LkContact.scss"


function LkContact(props) {
    return (
        <div className="lkcontact">
            <div className="lkcontact__row">
                <img alt="#" src={props.img} className="lkcontact__img" />
                <a href="#" className="lkcontact__text">{props.contact}</a>
            </div>
        </div>
    )
}

export { LkContact }