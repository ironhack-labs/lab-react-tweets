import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage data={props.tweet.user.image} />
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      />{" "}
       */}
      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name"> {props.tweet.user.name} </span>
            <span className="handle"> @{props.tweet.user.name} </span>
          </span> */}
          <User data={props.tweet.user} />

          <Timestamp data={props.tweet.timestamp} />
          {/* <span className="timestamp"> {props.tweet.timestamp} </span> */}
        </div>

        {/* <p className="message">{props.tweet.message}</p> */}
        <Message data={props.tweet.message} />

        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
