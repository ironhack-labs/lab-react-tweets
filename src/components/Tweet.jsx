import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage profileImage = {props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userName = {props.tweet.user.name} userHandle = {props.tweet.user.handle} />
          <Timestamp timeStamp = {props.tweet.timestamp} />
        </div>

        <Message message = {props.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
