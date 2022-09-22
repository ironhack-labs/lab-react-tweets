import User from "./User";
function ProfileImage({ image }) {
  console.log(image);
  return (
    <img width="60px" height="60px" src={image} className="image" alt="image" />
  );
}
export default ProfileImage;
