import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet({ user, timestamp, message }) {
  const {name, image, handle}=user
  return (
    <div className="tweet">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
          <User name={name} handle={handle}/>

          <Timestamp timestamp={timestamp}/>
        </div>

        <Message message={message}/>

        <Action/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
