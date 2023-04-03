import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.details.user.image}/>

      <div className="body">
        <div className="top">
          <User name={props.details.user.name} handle={props.details.user.handle} />

          <Timestamp timestamp={props.details.timestamp} />
        </div>

        <Message message={props.details.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
