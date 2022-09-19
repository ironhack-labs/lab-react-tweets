import ProfileImage from "./ProfileImage";
import UserName from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {

  const { user } = tweet

  const { image } = user

  return (
    <div className="tweet">

      <ProfileImage img={image} />

      <div className="body">
        <div className="top">

          <UserName userData={user} />
          <TimeStamp date={tweet} />

        </div>

        <Message description={tweet} />

        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
