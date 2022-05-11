// import { render } from "@testing-library/react"
// import ReactPlayer from "react-player";
//import userEvent from "@testing-library/user-event";
//import Tweet from "./Tweet";

function ProfileImage(props)  {
    const profileImage = props.image;
    return (
        <img src={profileImage} className="profile" alt="profileFuck Yous"/>
    );
}
export default ProfileImage;