import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  console.log(props)
  const { user, message, timestamp } = props.tweet
  return (

    <div className="tweet">
      <ProfileImage img={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
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
