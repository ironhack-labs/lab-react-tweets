import ProfileImage from "./ProfileImage.jsx";
import Timestamp from "./Timestamp.jsx";
import User from "./User.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} alt={tweet.user.name} />
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

//  this could also be:
//  function Tweet(props) {
//   const tweet = props.tweet;
//   // ... rest of the component
// }
