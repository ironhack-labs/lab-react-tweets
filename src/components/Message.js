function Message({ message }) {
    console.log("message comp", message);
    return (
        <div className="message">
             <p > { message } </p>
        </div>
       
    );
  }
  export default Message;