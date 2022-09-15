import Actions from "./Actions/Actions";
import Message from "./Message/Message";
import ProfileImage from "./ProfileImage/ProfileImage";
import Timestamp from "./Timestamp/Timestamp";
import User from "./User/User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage tweet={tweet} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User tweet={tweet} />
          </span>
          <Timestamp tweet={tweet} />
        </div>
        <Message tweet={tweet} />

        {/* Font Awesome icons */}
        <Actions />
        {/* <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i> */}
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
