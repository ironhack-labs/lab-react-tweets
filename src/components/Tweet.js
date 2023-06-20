import ProfileImage from "./ProfileImage.js";
import User from "./User.js";
import Timestamp from "./Timestamp.js";

function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage
        image={props.tweet.user.image}
        className="profile"
        alt="profile"
      />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p className="message">{props.tweet.message}</p>

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
