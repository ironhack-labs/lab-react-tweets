import { Actions } from "./Actions";
import { Message } from "./Message";
import { ProfileImage } from "./ProfileImage";
import { Timestamp } from "./Timestamp";
import { User } from "./User";

function Tweet(props) {
  const { tweet } = props;
  return (
    <div className="tweet">
      <ProfileImage ImgSrc={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.user} />

          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
