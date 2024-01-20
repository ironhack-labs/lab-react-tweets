import ProfileImage from "./ProfileImage";
import User from './User';
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

const Tweet = ( { tweet } ) => {
  const { user: { name, handle, image }, timestamp, message } = tweet
  return (
    <div className="tweet">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User name={name} handle={handle} />
          </span>
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
