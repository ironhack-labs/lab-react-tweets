<p className="message"> TWEET_MESSAGE </p>

function Message(props) {
    return (
        <div>
            <p className="message"> {props.message}</p>
        </div>
    )
}

export default Message