import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet, name, image, handle, timestamp }) {
  return (
    <div className="tweet">
      <ProfileImage src={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <TimeStamp timestamp={timestamp} />
        </div>

        <Message message={tweet} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
