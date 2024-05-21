import Action from "./Action"
import ProfileImage from "./ProfileImage"
import TimeStamp from "./TimeStamp"
import User from "./User"
import Message from "./Message"



function Tweet({tweet}) {
  const {message, timestamp, user: {image, name, handle}} = tweet
  return (
    <div className="tweet">
        <ProfileImage image={image} />
      <div className="body">
        <div className="top">
        <User name={name} handle={handle}/>
        <TimeStamp time={timestamp}/>
        </div>
        <Message message= {message} />
        <Action />

      <i className="fas fa-ellipsis-h"></i>
    </div>
    </div>
  );
}

export default Tweet;
