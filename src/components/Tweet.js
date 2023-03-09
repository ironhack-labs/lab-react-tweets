import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  const { user, message, timestamp } = props.tweet
  return (
    <div className="tweet">
      <ProfileImage image={ user.image } />

      <div className="body">
        <div className="top">
          <User user={ user }/>

          <Timestamp timestamp={ timestamp }/>
        </div>

        <Message>
          { message }
        </Message>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
