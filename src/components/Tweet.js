import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";
import Timestamp from "./Timestamp";



function Tweet(props) {
  const { tweet } = props
  return (
    <div className="tweet">
      {/* <img
        src={tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage url={tweet.user.image} />
      <User name={tweet.user.name} />
      <Actions icons={tweet.Actions} />
      <Timestamp time={tweet.timestamp} />



      <div className="body">


        <p className="message">
          {tweet.message}
        </p>

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );


}

export default Tweet;
