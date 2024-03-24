function ProfileImage({ Tweet }) {
  return (
    <div>
      <img src={Tweet.user.image} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
