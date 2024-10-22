import Tweet from "./Tweet"
import App from "../App";

function User({name, handle}){
    return (
        <span className="user">
        <span className="name"> {name}</span>
        <span className="handle">@{handle}</span>
      </span>
    );
}

export default User;