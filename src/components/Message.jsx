const Message = (props) => {
  console.log("Message", props)
  return (
    <div>
      <p className="message"> {props.message} </p>
    </div>
  );
};

export default Message;
