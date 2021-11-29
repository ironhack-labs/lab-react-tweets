import User from "./User"
import ProfileImage from './ProfileImage'
import Message from './Message'
import Timestamp from "./Timestamp"
import Actions from "./Actions"


function Tweet(props) {
  const {tweet} = props
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User usersArray={tweet.user} />

          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
