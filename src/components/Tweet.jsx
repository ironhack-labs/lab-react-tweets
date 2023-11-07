import ProfileImage from "./ProfileImage"
import Actions from "./Actions"
import Message from "./Message"
import Timestamp from "./Timestamp"
import User from "./User"

function Tweet(props) {
  console.log(props.content);

  return (
    <div className="tweet">
      <ProfileImage picture={props.content.user.image} />

      <div className="body">
        <div className="top">
          <User
            username={props.content.user.name}
            userhandle={props.content.user.handle}
          />

          <Timestamp timeoftweet={props.content.timestamp} />
        </div>

          <Message messagecontent={props.content.message}/>

          <Actions />

        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
