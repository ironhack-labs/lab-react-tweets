function Message (props) {

    const { message_content } = props;

    return (
        <>
            <p className="message"> { message_content } </p>
        </>
    )
}

export default Message;