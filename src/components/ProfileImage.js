const ProfileImage = ({ image }) => {
  console.log("checking image", image);
  return <img src={image} className="profile" alt="profile" />;
};
export default ProfileImage;
