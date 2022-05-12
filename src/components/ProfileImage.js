// import { render } from "@testing-library/react"
// import ReactPlayer from "react-player";
//import userEvent from "@testing-library/user-event";
//import Tweet from "./Tweet";

function ProfileImage(props)  {
    //const profileImage = props.image;
    return (
        <img className="profile"
         src={props.user.image}  alt="profile"
         />
    );
}
export default ProfileImage;