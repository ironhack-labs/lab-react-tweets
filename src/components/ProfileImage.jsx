function ProfileImage(props) {
  const { image_url } = props;
  return <img src={image_url} className="profile" alt="profile" />;
}

export default ProfileImage;
