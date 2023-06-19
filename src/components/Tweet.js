import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.userData.user.image} />

      <div className="body">
        
        <div className="top">
          <User userData={props.userData.user} />
          <Timestamp time={props.userData.timestamp} />
        </div>

        <Message message={props.userData.message} />
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}



export default Tweet;
