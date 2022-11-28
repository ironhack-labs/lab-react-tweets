import ProfileImage from "./ProfileImage/ProfileImage";
import User from "./User/User"
import Timestamps from "./TimeStamps/Timestamp"
import Message from "./Message/Message";


function Tweet(props) {

  console.log(props)

  // const { user, message, timeStamp } = props.tweet

  return (
    <div className="tweet">
      {/* <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage prueba={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} />
          <User handle={props.tweet.user.handle} />
          <Timestamps timestamp={props.tweet.timestamp} />
        </div>

        <Message Message={props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div >
  );
}

export default Tweet;
