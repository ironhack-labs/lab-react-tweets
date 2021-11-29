const ProfileImage = (props) => {
  console.log(props.image);
  return <img src={props.imageUrl} className="profile" alt="profile" />;
};

export default ProfileImage;
