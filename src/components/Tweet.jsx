import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User
            name={props.tweet.user.name}
            handle={props.tweet.user.handle}
          ></User>

          <Timestamp time={props.tweet.timestamp}></Timestamp>
        </div>

        <Message message={props.tweet.message}></Message>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
