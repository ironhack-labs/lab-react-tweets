import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamps";
import User from "./User";

const Tweet = props => {
  const { tweet: { user: { name, image, handle }, timestamp, message } } = props

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userData={{ handle, name }} />

          <Timestamps time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

    </div>
  );
}

export default Tweet;
