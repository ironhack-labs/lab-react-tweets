import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {


  return (
    <div className="tweet">
      {/* profileImage here */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* user here */}
          <User user={props.tweet.user} />

          {/* timestamp here */}
          <Timestamp time={props.tweet.timestamp} />

        </div>
        {/* message here */}
        <Message message={props.tweet.message} />

        {/* actions here */}
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
