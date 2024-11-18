function Message(props){
    const {message}=props.tweet
    return <p className="message">{message}</p>
}

export default Message;