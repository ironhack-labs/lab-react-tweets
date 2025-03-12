import Action from "./Action";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({tweet}) {
  console.log(tweet);


  return (
    <div className="tweet">
      <ProfileImage tweetLevel2 = {tweet}/>

      <div className="body">
        <div className="top">
          <User name = {tweet.user.name} handle = {tweet.user.handle}/>
          

          <Timestamp tweetAnanas = {tweet}/>
        </div>

          <Message tweet = {tweet}/>

          <Action/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
