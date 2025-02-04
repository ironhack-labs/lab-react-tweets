import MyActions from "./Actions";
import TweetMensage from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import { TheUser } from "./User";

function Tweet({ tweet }) {
  const user = tweet.user;
  const timestamp = tweet.timestamp;
  const myMessage = tweet.message;
  return (
    <div className="tweet">
      {/* {console.log(theUser)} */}
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <TheUser name={user.name} handle={user.handle} />

          <TimeStamp timestamp={timestamp} />
        </div>

        <TweetMensage messages={myMessage} />
        <MyActions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
