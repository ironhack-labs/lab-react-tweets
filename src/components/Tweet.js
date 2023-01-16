import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ userDetails }) {
  return (
    <div className="tweet">
      <ProfileImage image={userDetails.user.image} />

      <div className="body">
        <div className="top">
          <User user={userDetails.user.name} />

          <Timestamp timestamp={userDetails.timestamp} />
        </div>

        <Message message={userDetails.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
