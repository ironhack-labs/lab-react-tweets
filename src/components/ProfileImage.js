//Name of the component should be the same as the file
function ProfileImage(props) {
  const { image } = props;
  //returns some html
  return <img src={image} className="profile" alt="profile" />;
}

export default ProfileImage;
