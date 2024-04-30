import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet() {
  return (
    <div className="tweet">
      <div>
        <ProfileImage
          image={
            "https://i.imgur.com/b0EdHVV.jpg"
          }
        />
      </div>

      <div className="body">
        <div className="top">
          
            <span className="user">
              <User name={"Thoughts of Dog®"} handle={"@dog_feelings"} />
            </span>

            <TimeStamp time={"1h ago"}/>

        </div>
        
        <div>
        <Message message={"the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company"}/>
        </div>
        
        <Actions />

      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
