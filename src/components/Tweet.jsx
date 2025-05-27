// src/components/Tweet.jsx
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

// ITERATIONS 4-8: Using extracted components
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      {/* Iteration 4: ProfileImage component */}
      <ProfileImage image={tweet.user.image} />
      
      <div className="body">
        <div className="top">
          {/* Iteration 5: User component */}
          <User name={tweet.user.name} handle={tweet.user.handle} />
          
          {/* Iteration 6: Timestamp component */}
          <Timestamp time={tweet.timestamp} />
        </div>

        {/* Iteration 7: Message component */}
        <Message message={tweet.message} />
        
        {/* Iteration 8: Actions component */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;