import Timestamp from "./Timestamp";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  const { tweet } = props;
  console.log(tweet);
  console.log(tweet.user.name);
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />

          <Timestamp time={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
