import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {



  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />



      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} />
          <User handle={props.tweet.user.handle} />



          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <p className="message">
          <Message message={props.tweet.message} />
        </p>





        <div className="actions">
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
