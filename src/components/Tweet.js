import User from "./User";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <div className="UserInfo-name">
          {props.author.name}
        </div> */}
        
      <ProfileImage src={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          {/* <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span> */}
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
        </div>

        <Message message={props.tweet.message}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
