const Message = (messages) =>{
    const message = messages.messages
    console.log(message,'el mensaje')
    return <p>{message}</p>
}

export default Message;