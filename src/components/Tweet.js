import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet({ tweet }) {
  // console.log(tweet.user);
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.user} />

          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
