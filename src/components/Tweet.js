import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

export default function Tweet({ tweet }) {
  return tweet.map((el) => (
    <div className="tweet">
      <ProfileImage image={el.user.image} />

      <div className="body">
        <div className="top">
          <User userData={el.user} />
          <Timestamp time={el.timestamp} />
        </div>

        <Message message={el.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  ));
}
