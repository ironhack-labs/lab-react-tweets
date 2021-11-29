const ProfileImage = ({ image }) => {
  console.log("probando si se ve la imagen", image);
  return <img src={image} className="profile" alt="profile" />;
};
export default ProfileImage;
