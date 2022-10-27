import { ProfileImage } from "./ProfileImage";
import { User } from "./User";
import { Actions } from "./Actions";
import { Message } from "./Message";
import Timestamp from "./Timestamp";

function Tweet(props) {
  let tweet = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user_name={tweet.user.name} user_handle={tweet.user.handle} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
