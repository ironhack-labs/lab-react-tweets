import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet({ name, handle, image, timestamp, message }) {
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User
            name={name}
            handle={handle}
          />

          <TimeStamp timestamp={timestamp} />
        </div>

        <Message message={message}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
