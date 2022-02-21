import User from "./User";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Actions from "./Actions";

function Tweet(props) {

  const { user, timestamp, message } = props.tweet

  const { name, image, handle } = user

  return (

    <div className="tweet">

      <ProfileImage image={image} />

      <div className="body">

        <div className="top">

          <User name={name} handle={handle} />

          <Timestamp timestamp={timestamp} />

        </div>


        <Message message={message} />

        <Actions />

      </div>



      <i class="fas fa-ellipsis-h"></i>

    </div>
  );
}



export default Tweet;
