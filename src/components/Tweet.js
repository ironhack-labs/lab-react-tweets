import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ user: { name, image, handle }, timestamp, message }) {
  return (
    <div className="tweet">
      <ProfileImage {...{image}} />

      <div className="body">
        <div className="top">
          <User {...{ name, handle }} />

          <Timestamp {...{timestamp}} />
        </div>

        <Message {...{message}} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
