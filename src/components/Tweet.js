import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(props) {

  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User user={props.tweet.user}/>
            {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
            <Timestamp timestamp={props.tweet.timestamp}/>
          </span>
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
