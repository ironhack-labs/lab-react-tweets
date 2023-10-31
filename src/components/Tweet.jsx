import Profile from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  return (
    <div className="tweet">
      <Profile image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

          <User name={props.tweet.user.name} handle={props.tweet.user.name} />

          <Timestamp timestamp={props.tweet.timestamp}/>
        </div>

        <Message messages={props.tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
