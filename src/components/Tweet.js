import Message from "./Message";
import Timestamp from "./Timestamp";
import Profileimage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";

function Tweet({ tweet }) {
  const { user, message, timestamp } = tweet
  const { image, handle, name } = user
  return (
    <div className="tweet">
      <Profileimage image={image}
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <User user={user} />


          </span>

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
