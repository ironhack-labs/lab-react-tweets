import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";



function Tweet({tweet}) {
  const {user, timestamp, message} = tweet;

  return (
    <div className="tweet">
      <ProfileImage ProfileImgSrc={user.image}/>

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle}/>
          <Timestamp time={timestamp}/>
        </div>

        <Message text={message} />

       <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
