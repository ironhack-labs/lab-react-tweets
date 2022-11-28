import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
import Timestamp from "./Timestamp";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user}/>
          <Timestamp time={props.tweet.timestamp}/>
        </div>

      <Message message={props.tweet.message}/>
          {/* Font Awesome icons */}
      <Actions/>

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
