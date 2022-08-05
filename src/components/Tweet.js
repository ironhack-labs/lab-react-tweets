import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Action from "./Actions";
import Timestamp from "./Timestamp";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage tweet={tweet} />

      <div className="body">
        <div className="top">
          <User tweet={tweet} />
          <Timestamp tweet={tweet} />
        </div>

        <Message tweet={tweet} />
        <Action />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
