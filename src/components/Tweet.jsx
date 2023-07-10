// function Tweet({tweet}) {


//   return (
//     <div className="tweet">
//       <img
//         src={tweet.user.image}
//         className="profile"
//         alt="profile"
//       />

//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <span className="name">{tweet.user.name}</span>
//             <span className="handle">{tweet.user.handle}</span>
//           </span>

//           <span className="timestamp">{tweet.timestamp}</span>
//         </div>

//         <p className="message">
//           {tweet.message}
//         </p>

//         <div className="actions">
//           {/* Font Awesome icons */}
//           <i className="far fa-comment"></i>
//           <i className="fas fa-retweet"></i>
//           <i className="far fa-heart"></i>
//           <i className="fas fa-share"></i>
//         </div>
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }
import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User';
import Action from './Actions';
import Message from './Message';
import Timestamp from './Timestamp';

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={IMAGE_URL} />
      <User name={USER_NAME} handle={USER_HANDLE} />
      <Timestamp time={TWEET_TIMESTAMP} />
      <Message message={TWEET_MESSAGE} />
      <Actions />
    </div>
  );
}
export default Tweet;










