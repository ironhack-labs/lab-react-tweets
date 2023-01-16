import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
import Timestamp from "./Timestamp";

function Tweet({ values }) {
  return (
    <div className="tweet">
      <ProfileImage image={values.user.image} />

      <div className="body">
        <div className="top">
          <User userData={values.user} />
          <Timestamp time={values.timestamp} />
        </div>

        <Message message={values.message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
