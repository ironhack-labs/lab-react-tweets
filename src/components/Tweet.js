import { ProfileImage } from "./ProfileImage"
import { Message } from "./Message"
import { Timestamp } from "./Timestamp"
import { User } from "./User"
import { Actions } from "./Actions"

export function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
