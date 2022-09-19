import ProfileImage from "./ProfileImage";
import User from './User'
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">

      <ProfileImage image={props.tweet.user.image} />


      <div className="body">
        <div className="top">
          <span className="user">
            <User userdata={props.tweet.user} />
          </span>

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p><Message message={props.tweet.message} /></p>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>


    </div>
  );
}

export default Tweet;
