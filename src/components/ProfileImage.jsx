function ProfileImage(props) {
  const { image } = props;
  return <img src={image} className="profile" alt="profile" />;
}

export default ProfileImage;
