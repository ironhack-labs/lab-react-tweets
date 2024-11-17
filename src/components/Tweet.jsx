import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet(props) {
  const { tweet } = props;

  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />   {/* Iteration 4*/}

      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle={tweet.user.handle} />  {/* Iteration 5*/}
          <Timestamp time={tweet.timestamp} />  {/* Iteration 6*/}
        </div>

        <Message message={tweet.message} />  {/* Iteration 7*/}

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
