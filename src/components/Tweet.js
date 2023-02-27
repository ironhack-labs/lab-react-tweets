import ProfileImage from './ProfileImage'
import User from './User'
import Timestamp from './Timestamp'
import Message from './Message'
import Action from './Action'

function Tweet(props) {
  props = props.tweet
  return (
    <div className="tweet">
      <ProfileImage url={props.user.image} />
      <div className="body">
        <div className="top">
          <User user={props.user}/>
          <Timestamp timestamp = {props.timestamp}/>
        </div>

        <Message message={props.message}/>

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
