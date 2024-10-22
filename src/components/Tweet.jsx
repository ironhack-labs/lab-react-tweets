import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Actions";
function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.user.image}
        className="profile"
        alt="profile"
      /> */}
  <ProfileImage user={props.user}/>
      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.user.name}</span>
            <span className="handle">{props.user.handle}</span>
          </span> */}
        <User user={props.user}/>
          {/* <span className="timestamp">{props.timestamp}</span> */}
        <Timestamp timestamp={props.timestamp} />
        </div>

        {/* <p className="message">
          {props.message}
        </p> */}
        <Message message={props.message}/>
        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
