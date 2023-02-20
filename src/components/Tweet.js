import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log("PROPS FROM TWEET");
  console.log(props);
  return (
    <div className="tweet">
      {/* <img src={props.user.image} className="profile" alt="profile" /> */}
      {/* image is now taken from ProfileImage component */}
      <ProfileImage image={props.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.user.name}</span>
            <span className="handle"> {props.user.handle} </span>
          </span> */}
          {/* User is now taken from User component */}
          <User name={props.user.name} handle={props.user.handle} />

          {/* <span className="timestamp"> {props.timestamp} </span> */}
          {/* Timestamp is now taken from Timestamp component */}
          <Timestamp time={props.timestamp} />
        </div>

        {/* <p className="message">{props.message}</p> */}
        {/* Message is now taken from Message component */}
        <Message message={props.message} />

        {/* <div className="actions">
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */}
        {/* Actions is now taken from Actions component */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
