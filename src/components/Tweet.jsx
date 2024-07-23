import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top"> 
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp time={tweet.timestamp} />
        </div>
        <p><Message message={tweet.message} /></p> 
       
        <div className="actions">
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
