import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <>
      {props.tweet &&
        props.tweet.map((prop, index) => (
          <div key={index} className="tweet">
            <ProfileImage image={prop.user.image} />

            <div className="body">
              <div className="top">
                <User name={prop.user.name} handle={prop.user.handle} />

                <Timestamp time={prop.timestamp} />
              </div>

              <Message message={prop.message} />

              <Actions />
            </div>
          </div>
        ))}
    </>
  );
}
export default Tweet;
