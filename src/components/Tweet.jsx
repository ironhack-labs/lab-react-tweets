import Actions from "./actions/actions";
import Message from "./message/message";
import ProfileImage from "./profileImage/profileImage";
import TimeStamp from "./timeStamp/timeStamp";
import User from "./user/user";

const Tweet = ({ tweet }) => {
  const { name, image, handle } = tweet.user
  const { message, timestamp } = tweet
  console.log(tweet)
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <TimeStamp timeStamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
