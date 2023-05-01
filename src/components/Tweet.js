import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";
import User from "./User";

function Tweet(props) {
  //const { name, image, handle } = props.tweet.user;
  //const { timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp}/>
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
