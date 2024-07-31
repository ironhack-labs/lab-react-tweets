import TweetCard from "./TweetCard.jsx";

function Tweet() {
    const tweetsArray = [
        {
            user: {
                name: "Thoughts of Dog®",
                image:
                    "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
                handle: "dog_feelings",
            },
            timestamp: "1h ago",
            message:
                "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
        },
        {
            user: {
                name: "Thoughts of Dog®",
                image:
                    "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
                handle: "dog_feelings",
            },
            timestamp: "2h ago",
            message:
                "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
        },
        {
            user: {
                name: "Thoughts of Dog®",
                image:
                    "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
                handle: "dog_feelings",
            },
            timestamp: "3h ago",
            message:
                "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
        },
    ];

    // let tweetsArray;
    return (
        /*    <div className="tweet">
              <img
                src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
                className="profile"
                alt="profile"
              />

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
                  to #SQL! Are you ready? 🚀 ....
                </p>

                <div className="actions">
                  {/!* Font Awesome icons *!/}
                  <i className="far fa-comment" data-testid="comment-icon"></i>
                  <i className="fas fa-retweet" data-testid="retweet-icon"></i>
                  <i className="far fa-heart" data-testid="heart-icon"></i>
                  <i className="fas fa-share" data-testid="share-icon"></i>
                </div>
              </div>

              <i className="fas fa-ellipsis-h"></i>
            </div> */
        /* <div className="tweet">
       {/!*    <img
             src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/ih_logo.jpeg"
             className="profile"
             alt="profile"
           />  *!/}
             <img
             src={tweetsArray[0].user.image}
             className="profile"
             alt="profile"
           />

           <div className="body">
             <div className="top">
               <span className="user">
                 {/!*<span className="name">Ironhack</span>*!/}
                 <span className="name">{tweetsArray[0].user.name}</span>
                 {/!*<span className="handle">@ironhack</span>*!/}
                 <span className="handle">{tweetsArray[0].user.handle}</span>
               </span>

               <span className="timestamp">{ tweetsArray[0].timestamp}</span>
               {/!*<span className="timestamp">Nov 30, 2020</span>*!/}
             </div>

             <p className="message">
             {/!*  On December 7th, we will be hosting a #webinar that will introduce you
               to #SQL! Are you ready? 🚀 ....*!/}
                 {tweetsArray[0].message}
             </p>

             <div className="actions">
               {/!* Font Awesome icons *!/}
               <i className="far fa-comment" data-testid="comment-icon"></i>
               <i className="fas fa-retweet" data-testid="retweet-icon"></i>
               <i className="far fa-heart" data-testid="heart-icon"></i>
               <i className="fas fa-share" data-testid="share-icon"></i>
             </div>
           </div>

           <i className="fas fa-ellipsis-h"></i>
         </div>*/
        <div>
            {/*<TweetCard tweet={tweetsArray[0]} />*/}
            <TweetCard  />
            <TweetCard tweet={tweetsArray[1]} />
            <TweetCard tweet={tweetsArray[2]} />
        </div>
    // <TweetCard tweet={tweetsArray[1]} />
    // <MovieCard movie={movies[1]} />

);
}

export default Tweet;
