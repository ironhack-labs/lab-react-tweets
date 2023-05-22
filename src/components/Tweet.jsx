import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Actions from './Actions'

const Tweet = ({ tweet }) => {
  const { user, timestamp, message } = tweet
  const { name, image, handle } = user
  return (
    <div className="tweet">

      <ProfileImage image={image} />

      <div className="body">
        <div className="top">

          <User userData={user} />
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


//////

// import Actions from '../Actions/Actions';
// import Message from '../Message/Message';
// import ProfileImage from '../ProfileImage/ProfileImage';
// import Timestamp from '../Timestamp/Timestamp';
// import User from '../User/User';
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