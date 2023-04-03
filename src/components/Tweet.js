// import image from "./Tweet";
import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <h1>{props.tweet.user.name} </h1>
      <h1>{props.tweet.user.handle} </h1> */}

      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
