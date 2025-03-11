import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";

function Tweet({oneTweet}) {
  console.log("tweet : ", oneTweet);
  return (
    <div className="tweet">
      <ProfileImage imgSrc={oneTweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userName={oneTweet.user.name} userHandle={oneTweet.user.handle}/>

        <Timestamp timestamp={oneTweet.timestamp}/>
        </div>

        <Message message={oneTweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
