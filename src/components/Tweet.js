import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.user.name} handle={props.user.handle} />
          <TimeStamp timestamp={props.timestamp} />
        </div>
        <Message message={props.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
