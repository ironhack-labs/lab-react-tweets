import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage IMAGE_URL={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User USER_NAME={tweet.user.name} USER_HANDLE={tweet.user.handle}/>

          <Timestamp TWEET_TIMESTAMP={tweet.timestamp}/>
        </div>

        <Message TWEET_MESSAGE={tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
