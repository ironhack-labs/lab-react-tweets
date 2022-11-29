import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";
function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image = {tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
        <User user={tweet.user} />

        <Timestamp Time={tweet.timestamp} />
        </div>

        <Message message={tweet.message}/>
        <Action/>
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
