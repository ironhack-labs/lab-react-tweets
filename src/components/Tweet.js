import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

// function Tweet(props) {
//   return (
//     <div className="tweet">
//       <={props.tweet.user.image} className="profile" alt="profile" />

//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <span className="name">{props.tweet.user.name}</span>
//             <span className="handle">{props.tweet.user.handle}</span>
//           </span>

//           <span className="timestamp">{props.tweet.timestamp}</span>
//         </div>

//         <p className="message">{props.tweet.message}</p>

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
export default Tweet;
