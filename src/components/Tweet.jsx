import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const { name, image, handle } = props.tweet.user;
  const { message, timestamp } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage img={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
