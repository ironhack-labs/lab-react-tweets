import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions"

function Tweet(props) {
  console.log("the one tweet props", props);
  return (
    <div className="tweet">
      <ProfileImage image={props.oneTweet.user.image} />

      <div className="body">
        <div className="top">
          <User
            name={props.oneTweet.user.name}
            handle={props.oneTweet.user.handle}
          />

          <Timestamp time={props.oneTweet.timestamp} />
        </div>
        <Message message={props.oneTweet.message}/>

        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
