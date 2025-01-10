import ProfileImage from "./ProfileImage";
import UserComponent from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>
      <div className="body">
        <div className="top">
          <UserComponent
            userName={props.tweet.user.name}
            userHandle={props.tweet.user.handle}
          />

          <TimeStamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        
      <Actions/>

      </div>

      

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
