import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.image} />

      <div className="body">
        <div className="top">
          <User name={props.name} handle={props.handle} />
          <Timestamp timestamp={props.timestamp} />
        </div>

        <Message message={props.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
