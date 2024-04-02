import '../tweet/Tweet.css';

function TweetUser({ name, handle }) {
  return (
    <div>
        <span className="user"><h5>{name}</h5> <p>@{handle}</p></span>
    </div>
  )
}

export default TweetUser;