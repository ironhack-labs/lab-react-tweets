
import './Tweet.css'
import TweetImage from '../tweet-image/TweetImage';
import TweetUser from '../tweet-user/TweetUser';
import TweetTimestamp from '../tweet-timestamp/TweetTimestamp';
import TweetMessage from '../tweet-message/TweetMessage';
import TweetComponents from '../tweet-components/TweetComponents';

function Tweet({ tweetsArray }) {

  return (
    <ul>
    {tweetsArray.map((tweet) => (
    <div className="tweet" key={tweet.timestamp}>
      <div className="top">
        <TweetImage image={ tweet.user.image } />
        <div className="content">
          <div className="user-data"> 
            <TweetUser name={ tweet.user.name } handle={ tweet.user.handle } />
            <TweetTimestamp timestamp={ tweet.timestamp } />
          </div>
          <div className="message">
            <TweetMessage message={ tweet.message } />
            <div>
              <TweetComponents />
            </div>
          </div>
        </div>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
    ))}
    </ul>
  );
    
}
export default Tweet;
