/* ------ Import components ------ */
import ProfileImage from "./ProfileImage";
import User         from "./User";
import Timestamp    from "./Timestamp";
import Message      from "./Message";
import Actions      from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} other="other"/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User user = { props.tweet.user.name } />
            <User userHandle = { props.tweet.user.handle } />
          </span>

          <Timestamp time = { props.tweet.timestamp } />
        </div>

        <Message message = { props.tweet.message } />

        <Actions />
          
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
