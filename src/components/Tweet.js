import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet(props) {
  const {user} = props.tweet;
  
  return (
    <div className="tweet">
    <ProfileImage image={user.image}/>
      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
        <Timestamp time={props.tweet.timestamp} />

        </div>

        <Message message={props.tweet.message} />
        <Action/>

        </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}


export default Tweet;
