function Message(message){
    console.log(message)
    return (
        <p className="message">
        {message.message}
        </p>
    )
}

export default Message