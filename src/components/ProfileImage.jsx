import Tweet from "./Tweet"
import App from "../App";

function ProfileImage({image}){
    return (
    <img
        src={image}
        className="profile"
        alt="profile"
        />
    );
}

export default ProfileImage;