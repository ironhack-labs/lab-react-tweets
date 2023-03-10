import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{tweet.user.handle}</span>
          </span>
          
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

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
};

export default Tweet;
