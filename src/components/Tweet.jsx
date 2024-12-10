import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";


function Tweet({ tweet }) { //En React, las props se reciben como argumento de la función del componente.
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} /> {/* We pass the return from the file, and give the argument here */}

      <div className="body">
        <div className="top">
          <User user={tweet.user} /> {/* passing the user component w/the user Id and name */}

          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
