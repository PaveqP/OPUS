import "./InputAuth.scss"

function InputAuth(props) {

    const {setValue = Function.prototype} = props;

    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={(event) => setValue(event.target.value)}
            >
            </input>
        </div>
    )
}

export { InputAuth }
