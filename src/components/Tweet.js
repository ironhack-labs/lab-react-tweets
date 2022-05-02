import App from "../App";
import ProfileImg from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Timestamp from "./Timestamps";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImg image={tweet.user.image}></ProfileImg>
      <div className="body">
        <div className="top">
          <span className="user">
            <User user={tweet.user}></User>
          </span>

          <Timestamp timeStamp={tweet.timeStamp}></Timestamp>
        </div>

        <Message message={tweet.message}></Message>
        <Actions/>

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
