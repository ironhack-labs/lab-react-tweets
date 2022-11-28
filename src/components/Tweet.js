import '../index.css'
import './ProfileImage'


const Tweet = props => {

  const { message, timestamp, user } = props.tweet
  console.log('holaa', props)
  return (
    <div className="tweet">
      <ProfileImage url={user.image}
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;


