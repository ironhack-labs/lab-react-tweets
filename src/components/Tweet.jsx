import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx"
import Timestamp from "./Timestamp.jsx"
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet(props) {
  const {name,handle,image} = props.tweet.user
  return (
    <div className="tweet">
      <ProfileImage image ={image} />
      {/* <img
        src={image}
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
            <User name={name} handle={handle} />
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
