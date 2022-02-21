import ProfileImage from "./ProfileImage";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="App">
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
