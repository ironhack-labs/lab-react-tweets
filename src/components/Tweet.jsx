import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  // const [name, image, handle, timestap, messsage] = props;
  const { tweet } = props;
  return (
    <div className="tweet">
      <ProfileImage image_url={tweet.user.image} />
      
      <div className="body">

        <div className="top">
          <User user_name={tweet.user.name} user_handle={tweet.user.handle} />
          <Timestamp tweet_timestamp={tweet.timestamp} />
        </div>

        <Message tweet_message={tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
