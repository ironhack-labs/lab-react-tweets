import User from "./User";
import Image from "./ProfileImage"
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Image IMAGE_URL={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />

          <TimeStamp TWEET_TIMESTAMP={tweet.timestamp}/>
        </div>

        <Message TWEET_MESSAGE={tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
