import ProfileImage from '../components/ProfileImage'
import User from '../components/User'
import Timestamp from '../components/Timestamp'
import Message from '../components/Message'
import Actions from '../components/Actions'

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;
  const { name, image, handle } = user;

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
      <i class="fas fa-ellipsis-h"></i>
    </div>
    // <div className="tweet">
    //   <ProfileImage image={image} />

    //   <div className="body">
    //     <div className="top">
    //       <span className="user">
    //         <span className="name">{name}</span>
    //         <span className="handle">{handle}</span>
    //       </span>

    //       <span className="timestamp">{timestamp}</span>
    //     </div>

    //     <p className="message">
    //       {message}
    //     </p>

    //     <div className="actions">
    //       {/* Font Awesome icons */}
    //       <i class="far fa-comment"></i>
    //       <i class="fas fa-retweet"></i>
    //       <i class="far fa-heart"></i>
    //       <i class="fas fa-share"></i>
    //     </div>
    //   </div>

    //   <i class="fas fa-ellipsis-h"></i>
    // </div>
  );
}

export default Tweet;
