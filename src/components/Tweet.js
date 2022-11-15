/* import ProfileImage from "./ProfileImage"; */
/* import User from "./User"; */
/* import Timestamp from "./Message";
import Message from "./Actions";  */

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      {/* <ProfileImage image ={tweet.user.image}/> */}
      <img src={user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">{message}</p>

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
