import ProfileImage from "./ProfileImage";
import Message from "./Message";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage profileImage={props.tweet.user.image}/>

      <div className="body">
        <User user={props.tweet.user} timestamp={props.tweet.timestamp}/>

        <Message message={props.tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
