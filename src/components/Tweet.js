function Tweet(props) {

  //const AppTweet = 'the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company';
  
  return (
    <div className="tweet">
      <img
        src= "https://i.imgur.com/b0EdHVV.jpg"
        className="profile"
        alt="profile"
      />

      <div className="tweet2">
        <p>
         
        </p>
        
        <p>
          
        </p>

        <p>
          
        </p>
        
        <p>
            
        </p>

        <p>
          <b>:</b>  
        </p>


      <br />
      </div>
    

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.name}</span>

            <span className="handle">{props.tweet.handle}</span>
          </span>

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

        <p className="message">
          {props.tweet.message}
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
