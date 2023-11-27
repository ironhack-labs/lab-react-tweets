import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';
import Message from './Message';
import Actions from './Actions';
function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img src= className="profile" alt="profile" /> */}
      <ProfileImage profileImgSrc={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
