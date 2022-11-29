// create function for message

function Message(props) {
    const { message } = props;

    return(

        <p className="message">
          {message}
        </p>         

    );
}

export default Message;