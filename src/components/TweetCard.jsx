

function TweetCard(props) {

    const {tweet} = props;

    return (
        <div className="tweet">
            <img
                src={tweet.user.image}
                className="profile"
                alt="profile"
            />

            <div className="body">
                <div className="top">
          <span className="user">
              <span className="name">{tweet.user.name}</span>
              <span className="handle">{tweet.user.handle}</span>
          </span>

                    <span className="timestamp">{tweet.timestamp}</span>
                </div>

                <p className="message">
                    {tweet.message}
                </p>

                <div className="actions">
                    {/* Font Awesome icons */}
                    <i className="far fa-comment" data-testid="comment-icon"></i>
                    <i className="fas fa-retweet" data-testid="retweet-icon"></i>
                    <i className="far fa-heart" data-testid="heart-icon"></i>
                    <i className="fas fa-share" data-testid="share-icon"></i>
                </div>
            </div>

            <i className="fas fa-ellipsis-h"></i>
        </div>
    )

}

export default TweetCard;