import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  console.log(props);
  /* const {name, image, handle, timestamp, message} = props; */
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
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
