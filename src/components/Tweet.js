import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet({tweet}) {
  return (
    <>
    {
      tweet.map((element,i)=>{
       
        return(
          <div key={i} className="tweet">
      <ProfileImage image={element.user.image}/>
      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={element.user}/>
          </span>

          <Timestamp time={element.timestamp} />
        </div>

        <Message message={element.message} /> 

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
        )
      })
    }
    </>
    
    
  );
}

export default Tweet;
