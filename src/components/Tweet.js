import userEvent from '@testing-library/user-event';
import { ProfileImage } from './ProfileImage';
import { User } from './User';
import { Timestamp } from './Timestamp';
import { Message } from './Message';
import { Actions } from './Actions';
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userInfo={props.tweet.user} />
          <Timestamp timeStamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

export default Tweet;
