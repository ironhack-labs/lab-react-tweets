function Tweet() {
    return (
      <div className="tweet">
        <ProfileImage image={props.tweet.user.image} />
        

      </div>
    );
  }
  
  export default Tweet;