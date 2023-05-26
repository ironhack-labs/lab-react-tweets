function Message({ message }) {
    console.log("user name and handle comp", message);
    return (
        <p className="message"> { message } </p>
    );
  }
  export default Message;