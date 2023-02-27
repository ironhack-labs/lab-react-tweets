import ImageProfile from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { message, timestamp, user } = tweet
  return (
    <div className="tweet">
      <ImageProfile image={user.image} />

      <div className="body">
        <div className="top">

          <User infoUser={user} />

          <TimeStamp timestamp={timestamp} />

        </div>

        <Message message={message} />
        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
