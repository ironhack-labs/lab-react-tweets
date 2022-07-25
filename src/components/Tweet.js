
  import ProfileImage from "./ProfileImage";
  import Timestamp from "./Timestamp";
  import User from "./User";
  import Message from "./Message";
  import Actions from "./Actions";
  
  function Tweet(props) {

  
    const { tweet } = props;
  
    return (
      <div className="tweet">
        <ProfileImage image={tweet.user.image} />
  
        <div className="body">
          <div className="top">
           
            <User userData={tweet.user} />

             <Timestamp  time={tweet.Timestamp}/>

          </div>
        
          

       
  
          <Message message={tweet.message}/>
  
          <Actions />
  
        </div>
  
        <i className="fas fa-ellipsis-h"></i>
        
      </div>
    );
  }
  export default Tweet;
