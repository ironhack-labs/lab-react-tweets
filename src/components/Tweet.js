import ProfileImage from "./ProfileImage";
import Message from "./Message";
import User from "./User";
import Timestamp from "./Timestamp"
import Actions from "./Actions"

function Tweet(props) {
  return (
    <div className="tweet">
       <ProfileImage image={props.tweet.user.image}/>
      

      <div className="body">
        <div className="top">
          <span className="user">


            <User user={props.tweet.user}/>
          </span>

          < Timestamp timestamp ={props.tweet.timestamp}/>
        </div>

        <p>
          <Message message={props.tweet.message}/>
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          < Actions/>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
