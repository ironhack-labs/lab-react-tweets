import ProfileImage from './../components/ProfileImage';
import Actions from './../components/Actions';

function Tweet({ tweet }) {

  const {
    user: { name, image, handle },
    timestamp, message } = tweet

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">{message}</p>

        <Actions />
        {/* <div className="actions"></div>
        Font Awesome icons */}


      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
