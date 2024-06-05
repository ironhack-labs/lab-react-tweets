function ProfileImage(user) {
  console.log(user);
  const { image } = user;
  console.log(image);
  return <img src={image} className="profile" alt="profile" />;
}

export default ProfileImage;
