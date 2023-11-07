import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Actions from "./Actions"
import User from "./User";

function Tweet(props) {

  console.log(props.tweet.message)

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}
      />

      <div className="body">
        <div className="top">
           <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
           
          <Timestamp time={props.tweet.timestamp} />
          
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
