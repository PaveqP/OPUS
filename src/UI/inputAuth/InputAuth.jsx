import "./InputAuth.scss"

function InputAuth(props) {
    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
            >
            </input>
        </div>
    )
}

export { InputAuth }
