import TweetImage from "./ProfileImage"
import "../App.js"
import TweetUser from "./User";
import TweetTimestap from "./Timestamp";
import TweetMessage from "./Message";
import TweetAction from "./Actions";

function Tweet(props) {
  const { message, timestamp, user } = props.tweet  //: handle, user: name, user: image

  return (
    <div className="tweet">

      <TweetImage image={user.image} />

      <div className="body">
        
        <div className="top">
          <TweetUser user={user} />

          <TweetTimestap timestamp={timestamp} />
        </div>

        <TweetMessage message={message} />

        <TweetAction />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
