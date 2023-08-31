import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions"

function Tweet(props) {
  const { user: {name, image, handle}, timestamp, message } = props
  return (
    <div className="tweet">

      <ProfileImage image={ image }/>

      <div className="body">
        <div className="top">
          <User name={ name } handle={ handle }/>

          <TimeStamp timestamp={ timestamp }/>
        </div>

        <Message message_content={ message }/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
