import ProfileImage from './ProfileImage'
import User from './User'
import Actions from './Actions'
import Timestamp from './Timestamp'
import Message from './Message'

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage tweet={tweet} />

      <div className="body">
        <div className="top">
          <User tweet={tweet} />
          <Timestamp tweet={tweet} />
        </div>

        <Message tweet={tweet} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
