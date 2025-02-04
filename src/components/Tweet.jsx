import ProfileImage from "./ProfileImage" // Me aseguro de importar el componente, y así con el resto
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  console.log("Timestamp recibido:", tweet.timestamp);
  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} /> {/* PROFILE IMAGE */}

      <div className="body">
        <div className="top">

          <User name={tweet.user.name} handle={tweet.user.handle} /> {/* Name y handle dentro del user */}
          <Timestamp time={tweet.timestamp} />

        </div>

        <Message message={tweet.message} />
        <Actions />

      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
