import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Action from "./Actions";

function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">

{/* lo de userData mae ha llevado bastante!!!! */}
        <User userData={props.tweet.user} /> 
        <TimeStamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Action />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
