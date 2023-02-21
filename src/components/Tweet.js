import User from "./User";

import ProfileImage from "./ProfileImage";

import Message from "./Message";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
     <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
      

          <span className="timestamp">
          <Timestamp> timestamp={props.tweet.timestamp}</Timestamp></span>
        </div>

        <Message message={props.tweet.message} />

        <div className="actions">
        <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
