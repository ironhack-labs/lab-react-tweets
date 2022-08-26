import './Tweet.styles.css'
import '../components'
import { AboutButton, ActionsButton } from '../components';

export const Tweet = (props) => {
  const {icon, alt, profileName, userName, timeStamp, message} = props
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
          <ActionsButton />
        </div>
      </div>

      <AboutButton />
    </div>
  );
}
