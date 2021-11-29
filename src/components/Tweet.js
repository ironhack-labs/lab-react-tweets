import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

const Tweet =(props)=> {
  const {tweet} = props
  const {user, timestamp, message} = tweet

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User userData={user} />
          <Timestamp time={timestamp} />         
        </div>

        <p className="message">{message}</p>

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
