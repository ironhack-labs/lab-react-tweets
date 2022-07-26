import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">

      <ProfileImage data={props.tweet.user.image} />




      <div className="body">
        <div className="top">
          <User data={props.tweet.user} />
          <Timestamp data={props.tweet.timestamp} />
        </div>

        <Message data={props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions data="far fa-comment"/>
          <Actions data="far fa-retweet"/>
          <Actions data="far fa-heart"/>
          <Actions data="far fa-share"/>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
