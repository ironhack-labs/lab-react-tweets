const Message = ({ message }) => {
  return <p className="message">{message}</p>;
};

export default Message;

// without destructuring
// const Message = (props) => {
//   return <p className="message">{props.message}</p>;
// };

// export default Message;
