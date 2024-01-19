import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  //console.log("tweetlog");
  console.log(props.tweet.user.name);

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>
      <div className="body">
        <div className="top">
          <User
            userName={props.tweet.user.name}
            userHandle={props.tweet.user.handle}
          ></User>
          <Timestamp timeStamp={props.tweet.timestamp}></Timestamp>
        </div>
        <Message message={props.tweet.message}></Message>
        <Actions></Actions>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
