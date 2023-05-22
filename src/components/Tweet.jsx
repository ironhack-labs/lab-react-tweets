import Message from "./Message/Message";
import ProfileImage from "./ProfileImage/ProfileImage";
import TimeStamp from "./Timestamp/Timestamp";
import User from "./User/User";


function Tweet({ tweet: { user, timestamp, message } }) {

  return (
    <div className="tweet">
      <ProfileImage userImg={user} />

      <div className="body">
        <div className="top">

          <User userName={user} />

          <TimeStamp dataTime={timestamp} />

        </div>

        <Message userText={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
