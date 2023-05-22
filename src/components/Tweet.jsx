import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet
  // const { name, image, handle } = user
  return (
    <div className="tweet">
      <ProfileImage image={image} name={name} />
      <div className="body">
        <div className="top">
          <User userData={user} />
          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;


//////

// import './Tweet.css'

// const Tweet = ({ tweet }) => {
//   const { user, timestamp, message } = tweet
//   const { name, image } = user
//   return (
//     <div className="tweet">
//       <ProfileImage image={image} name={name} />
//       <div className="body">
//         <div className="top">
//           <User userData={user} />
//           <Timestamp timestamp={timestamp} />
//         </div>

//         <Message message={message} />

//         <Actions />
//       </div>

//       <i className="fas fa-ellipsis-h"></i>
//     </div>
//   );
// }

// export default Tweet;
