import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

// first destructuring of props --> ({tweet})
const Tweet = ({ tweet }) => {
  console.log(tweet);
  // second destructuring
  const { message, timestamp, user } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />

      <div className="body">
        <div className="top">
          <User user={user} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Tweet;

// ANOTHER APPROACH WITHOUT DESTRUCTURING

// const Tweet = (props) => {
//   // console.log(props);
//   return (
//     <div className="tweet">
//       <ProfileImage image={props.tweet.user.image} />

//       <div className="body">
//         <div className="top">
//           <User user={props.tweet.user} />
//           <Timestamp time={props.tweet.timestamp} />
//         </div>

//         <Message message={props.tweet.message} />
//         <Actions />
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// };

// export default Tweet;
