import Message from "./Message";
import ProfileImg from "./ProfileImg";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  const user = props.tweet.user; 
  const timestamp = props.tweet.timestamp; 
  const message = props.tweet.message; 

  return (
    <div className="tweet">
      <ProfileImg image={user.image} />
      
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
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
