import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from './User';

const Tweet = (props) => {
  const {tweet} = props;
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userData={tweet.user} />

          <Timestamp timestamp={tweet.timestamp}/>
        </div>

        <p className="message">
          {props.tweet.message}
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
