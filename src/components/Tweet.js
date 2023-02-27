import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";


function Tweet({ tweet }) {
  const { user, message, timestamp } = tweet
  const { name, image, handle } = user
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">

        <div className="top">
          <User userData={user} />

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
