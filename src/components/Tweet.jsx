import ProfileImage from "./ProfileImage.jsx"
import Timestamp from "./Timestamp"
import User from "./User"
import Message from "./Message"
import Action from "./Action"




function Tweet({ tweet }) {

  const { message, timestamp, user } = tweet
  const { handle, image, name } = user
  console.log({ image })

  return (
    <div className="tweet">
      <ProfileImage img={image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User name={name} handle={handle} />
          </span>

          <Timestamp timestamp={timestamp} />
        </div>

        <div className="message">
          <Message message={message} />
        </div>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
