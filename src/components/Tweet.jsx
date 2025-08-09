import PropTypes from 'prop-types';
import { useState } from 'react';

// TweetList component displays a list of tweets and handles like functionality
function TweetList({ tweets: initialTweets }) {
  // Initialize state with tweets array, adding isLiked property to each tweet
  const [tweets, setTweets] = useState(
    initialTweets.map(tweet => ({
      ...tweet,
      isLiked: false, // Set initial like status to false
    }))
  );

  // Handler function to toggle like status for a specific tweet
  const handleToggleLike = (tweetIndex) => {
    setTweets(prevTweets =>
      prevTweets.map((tweet, index) =>
        index === tweetIndex
          ? { ...tweet, isLiked: !tweet.isLiked } // Toggle like status
          : tweet
      )
    );
  };

  // Render list of tweets
  return tweets.map((tweet, index) => (
    // Individual tweet container
    <div className="tweet" key={index}>
      {/* User profile image */}
      <img
        src={tweet.user.image}
        alt={tweet.user.name}
        className="profile"
      />

      {/* Tweet content container */}
      <div className="body">
        {/* User info and timestamp */}
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">{tweet.user.handle}</span>
          </span>
          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        {/* Tweet message */}
        <p className="message">{tweet.message}</p>

        {/* Tweet action buttons */}
        <div className="actions">
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i
            className={`${tweet.isLiked ? 'fas' : 'far'} fa-heart`}
            data-testid="heart-icon"
            onClick={() => handleToggleLike(index)}
            style={{ color: tweet.isLiked ? 'red' : 'inherit' }}
          ></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      {/* More options button */}
      <i className="fas fa-ellipsis-h"></i>
    </div>
  ));
}

// PropTypes validation for component props
TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      timestamp: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      isLiked: PropTypes.bool,
    })
  ).isRequired,
};

export default TweetList;
