function ProfileImage({ image }) {
  return (
    <div className="image">
      <img src={image} className="profile" alt="profile" />
    </div>
  );
}
export default ProfileImage;
