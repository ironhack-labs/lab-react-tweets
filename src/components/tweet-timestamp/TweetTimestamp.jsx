import '../tweet/Tweet.css';

function TweetTimestamp({ timestamp }) {
  return (
    <div>
        <span className="secondary-data"> · {timestamp}</span>
    </div>
  )
}

export default TweetTimestamp;