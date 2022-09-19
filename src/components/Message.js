const Message = ({ description }) => {
    const { message } = description

    return (
        <>
            <p className="message">
                {message}
            </p>
        </>
    );
};

export default Message;