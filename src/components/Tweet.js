import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body"></div>
      <div className="top">
        <User userData={props.tweet.user.name} />
        <User userData={props.tweet.user.handle} />

        <Timestamp time={props.tweet.timestamp} />
        <Message message={props.tweet.message} />
      </div>
      <i className="fas fa-ellipsis-h"></i>
      {/*       <Message message={props.tweet.message} />
       */}{" "}
      <Actions />
      */{" "}
    </div>
  );
}

export default Tweet;
