function Message(props) {
    console.log("props from MESSAGE --->", props.message);
    return (
        <p className="message"> {props.message} </p>
    );
  }
  
  export default Message;