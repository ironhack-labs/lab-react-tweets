function Message(tweet) {
    const { message } = tweet
    return (
        <p className="message">
            {message}
        </p>
    )
}

export default Message;