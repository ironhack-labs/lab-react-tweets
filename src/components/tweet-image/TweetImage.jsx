import '../tweet/Tweet.css';

function TweetImage({ image }) {
  return (
    <div>
        <img src={image} className="profile" alt="profile"/>
    </div>
  )
}

export default TweetImage;