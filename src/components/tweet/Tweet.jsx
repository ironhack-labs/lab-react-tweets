import "./tweet.css";
import TimeStamp from "../../components/time-stamp/TimeStamp";
import User from "../../components/user/User";
import ProfileImage from "../../components/profile-image/ProfileImage";
import Message from "../../components/message/Message";
import Actions from "../../components/actions/Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <TimeStamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;
