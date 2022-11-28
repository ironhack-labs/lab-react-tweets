function message(props) {
    const msg = props.message;
    return (
        <p className="message">
            {msg}
        </p>
    )
}

export default message;