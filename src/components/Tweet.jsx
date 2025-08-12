import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage
        imgUrl={tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <User tweet={tweet} />
          <Timestamp tweet={tweet} />
        </div>
        <Message tweet={tweet} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
