import ProfileImage from "../components/ProfileImage.jsx";
import User from "../components/User.jsx";
import Timestamp from "../components/Timestamp.jsx";
import Message from "../components/Message.jsx";
import Actions from "../components/Actions.jsx";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />

        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
