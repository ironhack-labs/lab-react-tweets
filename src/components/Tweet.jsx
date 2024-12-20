function Actions() {
  return (
    <div className="actions">
      <i className="far fa-comment" data-testid="comment-icon"></i>
      <i className="fas fa-retweet" data-testid="retweet-icon"></i>
      <i className="far fa-heart" data-testid="heart-icon"></i>
      <i className="fas fa-share" data-testid="share-icon"></i>
    </div>
  );
}
export default Actions;
function Message({ message }) {
  return <p className="message">{message}</p>;
}
export default Message;
function ProfileImage({ image, alt }) {
return <img src={image} className="profile" alt={alt} />;
}
export default ProfileImage;
function TimeStamp({ timestamp }) {
console.log('Timestamp:', timestamp);
return <span className="timestamp">{timestamp}</span>;
}
export default TimeStamp;
import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './User';
import TimeStamp from './TimeStamp';
import Message from './Message';
import Actions from './Actions';
function Tweet({ tweet }) {
return (
  <div className="tweet">
    <ProfileImage image={tweet.user.image} name={tweet.user.name} />
    <div className="body">
      <div className="top">
        <UserInfo name={tweet.user.name} handle={tweet.user.handle} />
        <TimeStamp timestamp={tweet.timestamp} />
      </div>
      <Message message={tweet.message} />
      <Actions />
    </div>
    <i className="fas fa-ellipsis-h"></i>
  </div>
);
}
export default Tweet;
function UserInfo({ name, handle }) {
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}
export default UserInfo;