import Message from "./Message";
import User from "./User";
import Image from "./Image";
import Actions from "./Actions";

function Tweet(props) {
  const { user, timestamp, message } = props;
  return (
    <div className="tweet">
      <Image image = { user.image } />

      <div className="body">
        <div className="top">
          <User user={user} />

          <span className="timestamp">{timestamp}</span>
        </div>

        <Message message={message} />
      <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
