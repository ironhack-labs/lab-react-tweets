import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Actions from "./Actions";

function Tweet(prop) {
  return (
    <div className="tweet">
      <ProfileImage url={prop.data.user.image}/>

      <div className="body">
        <div className="top">
          <User name={prop.data.user.name} handle={prop.data.user.handle}/>
          <Timestamp timestamp={prop.data.timestamp} />
        </div>
        <Message message={prop.data.message}/>
        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
