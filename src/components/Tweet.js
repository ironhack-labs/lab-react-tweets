
import ProfileImage from "./ProfileImage";
import User from "./User";

const Tweet = (props) => {
  const {tweet} = props
  return (
    <div className="tweet">
        <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
           <User user = {tweet.user}/>
            <span className="handle"> @ {tweet.user.handle}</span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
          {tweet.message}
        </p>

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
