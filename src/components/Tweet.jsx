
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


{/* values coming from the tweet property of the Tweet element in App.jsx*/}
function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage profileImg= {tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User name = {tweet.user.name} handle = {tweet.user.handle} />
          <Timestamp time = {tweet.timestamp} />
        </div>
        <Message msg = {tweet.message}/>
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
