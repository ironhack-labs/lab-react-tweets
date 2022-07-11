import Tweet from "../Tweet"

const Message = ({ message }) => {
    return (
        <>
            <p className="message">
                {message}
            </p>
        </>
    )
}

export default Message