import ProfileImage from '../components/ProfileImage';
import User from '../components/User';
import TimeStamp from '../components/Timestamp';
function Tweet(props) {
  return (
    <div className="tweet">
       <ProfileImage image={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <TimeStamp time={props.tweet.timestamp} />
        </div>
        <p className="message">{props.tweet.message}

        </p>

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
