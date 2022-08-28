import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({tweets}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweets.user.image} />

      <div className="body">
        
        <div className="top">
          <User userData={tweets.user} />
          <Timestamp time={tweets.timestamp} />
        </div>

        <Message message={tweets.message} />
        <Actions />
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
export default Tweet;
