import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
          <div className="tweet">
            <ProfileImage image={props.content.user.image} />
            <div className="body">
              <div className="top">
                <User userData={props.content.user} />
                <Timestamp time={props.content.timestamp} />
              </div>
              <Message message={props.content.message} />
              <Actions />
            </div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        );
}

export default Tweet;
