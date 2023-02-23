import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

export default function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imgSource={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />

          <Timestamp timeStamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}