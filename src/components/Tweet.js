import ProfileImage from "./ProfileImage/ProfileImage";
import User from "./User/User";
import Timestamp from "./Timestamp/Timestamp";
import Message from "./Message/Message";
import Actions from "./Actions/Actions";

function Tweet(props) {
  const {tweet} = props;
  console.log(tweet.children);
  return (
    <div className="tweet">
      <ProfileImage image = {tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
          </span>

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />   

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
