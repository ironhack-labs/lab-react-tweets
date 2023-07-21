import Action from "./Action";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {

  return (

    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

        <div className="body">

          <div className="top">
            <User userData={props.tweet.user} />
            <Timestamp time={props.tweet.timestamp} />
          </div>

          <div className="message">
          <Message message={props.tweet.message} />
          <Action />
          </div>

        </div>

        <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
