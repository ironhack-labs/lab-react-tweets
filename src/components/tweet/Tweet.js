import './Tweet.css'

import ProfileImage from '../profile-image/ProfileImage';
import Actions from '../actions/Actions';
import Message from '../message/Message';
import Timestamp from '../timestamp/Timestamp';
import User from '../user/User';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />      
      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
