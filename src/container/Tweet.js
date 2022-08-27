import './tweet.styles.css'
// import '../components'
import { Aboutbutton} from '../components/Aboutbutton'
import { Actionsbutton} from '../components/Actionsbutton'

function Tweet({icon, alt, profileName, userName, timeStamp, message}) {
  return (
    <div className="tweet">
      <img
        src={icon}
        className="profile"
        alt={alt}
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{profileName}</span>
            <span className="handle">{userName}</span>
          </span>

          <span className="timestamp">{timeStamp}</span>
        </div>

        <p className="message">
          {message}
        </p>

        <div className="actions">
          <Actionsbutton />
        </div>
      </div>

      <Aboutbutton />
    </div>
  );
}

export default Tweet;
