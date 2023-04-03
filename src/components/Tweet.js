import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {
  console.log(tweet);
  // {
  //   user: {
  //     name: "Thoughts of Dog®",
  //     image: "https://i.imgur.com/b0EdHVV.jpg",
  //     handle: "dog_feelings",
  //   },
  //   timestamp: "1h ago",
  //   message:
  //     "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  // }
  return (
    <div className="tweet">
      <ProfileImage img={tweet.user.image} userName={tweet.user.name} />
      <div className="body">
        <div className="top">
          <User user={tweet.user} />
          <TimeStamp timestamp={tweet.timestamp} />
        </div>
        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
