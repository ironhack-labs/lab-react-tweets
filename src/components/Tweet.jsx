import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import Message from './Message';
import User from './User';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className='tweet'>
      <ProfileImage image={props.tweet.user.image} />

      <div className='body'>
        <div className='top'>
          <span className='user'>
            <User
              name={props.tweet.user.name}
              handle={props.tweet.user.handle}
            />
          </span>

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message msg={props.tweet.message} />

        <Actions />
      </div>

      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
}

export default Tweet;
