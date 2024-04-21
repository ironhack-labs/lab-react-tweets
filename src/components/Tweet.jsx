import Actions from "./Actions";
import Timestamp from "./Timestamp";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  return (
    <>
      {props.tweet.map((prop, index) => (
        <div key={index} className="tweet">
          <ProfileImage image={prop.user.image} />

          <div className="body">
            <div className="top">
              <User name={prop.user.name} handle={prop.user.handle} />

              <Timestamp timestamp={prop.timestamp} />
            </div>

            <Message message={prop.message} />

            <Actions />
          </div>

          <i className="fas fa-ellipsis-h"></i>
        </div>
      ))}
    </>
  );
}

export default Tweet;
