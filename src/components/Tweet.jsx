import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ Tweet }) {
  return (
    <div className="tweet">
      <ProfileImage Tweet={Tweet} />

      <div className="body">
        <div className="top">
          <User Tweet={Tweet} />
          <Timestamp Tweet={Tweet} />
        </div>

        <Message Tweet={Tweet} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
