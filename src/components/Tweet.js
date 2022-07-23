import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamps from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {

  const { tweet } = props;

  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

        <div className="body">
          <div className="top">
            <User userData={tweet.user} />
            <Timestamps time={tweet.timestamps} />
          </div>
          <Message message={tweet.message} />
          <Actions />
        </div>

        <i class="fas fa-ellipsis-h"></i>
    </div>
  );
  }
export default Tweet;
