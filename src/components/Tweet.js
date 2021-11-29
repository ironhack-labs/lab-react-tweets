import ProfileImage from "../components/ProfileImage";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={user}/>

          <Timestamp time={timestamp}/>
        </div>

        <Message message={message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
