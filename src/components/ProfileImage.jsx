function ProfileImage({ imgSrc }) {
  return (
    <div>
      <img src={imgSrc.image} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
