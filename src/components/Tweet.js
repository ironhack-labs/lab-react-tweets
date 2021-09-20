import React from 'react'
import Actions from './Actions';
import Message from './Message';
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';

// FINAL VERSION
function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

// export default function Tweet(props) {
//   console.log(props.data);
//   console.log(props.data[0]);
//   return (
//       <>
      
//       </>
//   )
// }

// function Tweet(props) {
//   return (
//     <div className="tweet">
//       <ProfileImage image={props.tweet.user.image} />
//       <div className="body">
//         <div className="top">
//           <span className="user">
//           <span className="name">{props.tweet[0].user.name}</span>
//             <span className="handle">{props.tweet[0].user.handle}</span>
//           </span>

//           <span className="timestamp">{props.tweet[0].timestamp}</span>
//         </div>

//         <p className="message">
//           {props.tweet[0].message}
//         </p>

//         <div className="actions">
//           {/* Font Awesome icons */}
//           <i class="far fa-comment"></i>
//           <i class="fas fa-retweet"></i>
//           <i class="far fa-heart"></i>
//           <i class="fas fa-share"></i>
//         </div>
//       </div>

//       <i class="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

export default Tweet;
