
function Message(props) {
    return (
        <p className="message">
            {props.tweetsArray.message}
        </p>
    );
}

export default Message;