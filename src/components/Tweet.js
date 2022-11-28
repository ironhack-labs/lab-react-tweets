function Tweet(props) {
  // const tweetsArray = [
  //   {
  //     user: {
  //       name: "Thoughts of Dog®",
  //       image: "https://i.imgur.com/b0EdHVV.jpg",
  //       handle: "dog_feelings",
  //     },
  //     timestamp: "1h ago",
  //     message:
  //       "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  //   },
  // const { name } = this.props.user;
  console.log(props.tweet.user);
  const  {name, image, handle} = props.tweet.user;
  const {timestamp, message} = props.tweet;

  return (
    <div className="tweet">
      <img
        src={image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
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
