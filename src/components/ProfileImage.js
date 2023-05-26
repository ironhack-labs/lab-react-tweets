function ProfileImage({ image }) {
  console.log("profile image tweet", image);
  return (
    <div className="profile">
      <img src={image} alt="userImg" />
    </div>
  );
}
export default ProfileImage;
