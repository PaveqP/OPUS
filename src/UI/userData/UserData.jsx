import "./UserData.scss"

function UserData(props) {
    return (
        <div className="userdata">
            <div className="userdata__login">
                {props.login}
            </div>
            <div className="userdata__nameandsurname">
                {props.name} 
                {/* {props.surname} */}
            </div>
        </div>
    )
}

export { UserData }