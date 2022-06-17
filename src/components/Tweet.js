import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

/* function Tweet(props) {
  return (
    <div className="tweet">
      <img src={props.tweet.user.image} className="profile" alt="profile" />

      <div className="body">
      <div className="top">
      <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@ironhack</span>
            </span>

            <span className="timestamp">{props.tweet.timestamp}</span>
        </div>
        
        <p className="message">{props.tweet.message}</p>

        <div className="actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
          </div>
          </div>

          <i class="fas fa-ellipsis-h"></i>
          </div>
  );
} */

/* display name, users image, users handle, tweet timestamp, message */
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user}></User>
          <Timestamp time={props.tweet.timestamp}></Timestamp>
        </div>
        <Message message={props.tweet.message}></Message>
        <Actions></Actions>
      </div>
    </div>
  );
}

export default Tweet;
