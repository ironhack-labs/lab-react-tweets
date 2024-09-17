import "./App.css";
import Tweet from "./components/Tweet";
import "./index.css";
const ProfileImage = ({ image }) => {
  return <img src={image} className="profile" alt="profile" />;
};

export default ProfileImage;
