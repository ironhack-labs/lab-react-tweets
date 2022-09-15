import ProfileImage from "./ProfileImage.js";
import User from "./User.js";
import Message from "./Message.js";
import Timestamp from "./Timestamp.js";
import Actions from "./Actions.js";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  const { name, image, handle } = user;
  return (
    <div className='tweet'>
      <ProfileImage image={image} />
      <div className='body'>
        <div className='top'>
          <User user={{ name, handle }} />
          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i class='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
