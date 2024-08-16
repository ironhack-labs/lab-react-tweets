import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

    
const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <div className="user-info">
        <ProfileImage src={tweet.user.image} alt={tweet.user.name} />
        <h2>{tweet.user.name}</h2>
        <User name={tweet.user.name} handle={tweet.user.handle} />
      </div>
      <div className="tweet-content">
        <Message text={tweet.message} />
        <Timestamp time={tweet.timestamp} />
        <Actions />
      </div>
    </div>
  );
};

<img
src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
className="profile"
alt="profile"
/>
<div className="body">
<div className="top">
  <span className="user">
    <span className="name">Ironhack</span>
    <span className="handle">@ironhack</span>
  </span>
  <Timestamp time="Nov 30, 2020" />
</div>
<Message text="On December 7th, we will be hosting a #webinar that will introduce you to #SQL! Are you ready? 🚀" />
<Actions />
{/* Font Awesome icons */}
<i className="far fa-comment" data-testid="comment-icon"></i>
<i className="fas fa-retweet" data-testid="retweet-icon"></i>
<i className="far fa-heart" data-testid="heart-icon"></i>
<i className="fas fa-share" data-testid="share-icon"></i>
</div>
<i className="fas fa-ellipsis-h"></i>

export default Tweet;
