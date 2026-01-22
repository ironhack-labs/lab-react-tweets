import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

// function Tweet(props) {
//   const { user, timestamp, message } = props.tweet;
//   return (
//     <div className="tweet">
//       <ProfileImage image={user.image} />
//       <div className="body">
//         <div className="top">
//           <span className="user">
//             <User name={user.name} handle={user.handle} />
//           </span>
//           <Timestamp time={timestamp} />
//         </div>
//         <Message message={message} />
//         <Actions />
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

// export default Tweet;

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User name={user.name} handle={user.handle} />
          </span>
          <Timestamp time={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
