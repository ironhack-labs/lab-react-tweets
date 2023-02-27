import userEvent from "@testing-library/user-event";
import Actions from "./Actions/Actions";
import Message from "./Message/Message";
import ProfileImage from "./ProfileImage/ProfileImage";
import TimeStamp from "./TimeStamp/TimeStamp";
import User from "./User/User";

const Tweet = ({ tweet }) => {


  const { user, timestamp, message } = tweet

  return (
    <div className="tweet">

      <ProfileImage user={user} />

      <div className="body">
        <div className="top">

          <User user={user} />
          <TimeStamp timestamp={timestamp} />

        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
