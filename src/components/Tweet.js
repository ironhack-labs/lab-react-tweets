import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  const { user, message, timestamp, actions } = props.tweet
  const { image, name, handle } = user

  return (
    <div className="tweet">

      <ProfileImage image={image} />

      <div className="body">

        <div className="top">

         <User name={name} handle={handle} />

         <Timestamp timestamp={timestamp}/>

        </div>

        <Message message ={message} />

        <Actions actions ={actions } />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
