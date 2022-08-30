import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";


function Tweet(props) {

  // console.log(prop.tweet.user.name)

  return (
    <div className="tweet">

      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />

        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
