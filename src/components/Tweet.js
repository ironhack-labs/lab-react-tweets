function Tweet({ tweet, name, image, handle, timestamp }) {
  return (
    <div className="tweet">
      <img src={image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span>

          <span className="timestamp">{timestamp}</span>
        </div>

        <p className="message">
          {tweet}
          {/* On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀 */}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
