import ProfileImage from "./ProfileImage";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  const { name, handle, image } = props.tweet.user;
  const { timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message= {message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
