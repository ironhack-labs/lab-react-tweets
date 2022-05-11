function Tweet(props) {

  //const AppTweet = 'the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company';
  
  return (
    <div className="tweet">
      <img
        src="https://i.imgur.com/9yw1Fyw.jpg"
        className="profile"
        alt="profile"
      />

      <div className="tweet2">
        <p>
          <b>name:</b>{props.tweet.name} 
        </p>
        
        <p>
          <b>image:</b> {props.tweet.img}   
        </p>

        <p>
          <b>handle:</b> {props.tweet.handle}
        </p>
        
        <p>
          <b>timestamp:</b> {props.tweet.timestamp}   
        </p>

        <p>
          <b>message:</b> {props.tweet.message}   
        </p>


      <br />
      </div>
    

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Ironhack</span>

            <span className="handle">@ironhack</span>
          </span>

          <span className="timestamp">Nov 30, 2020</span>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
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
