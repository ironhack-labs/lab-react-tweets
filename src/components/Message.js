function Message(props) {
    console.log("<Message /> component props object: ", props);

    return (
        <p className="message">
            {props.message}
        </p>
    );
}

export default Message;