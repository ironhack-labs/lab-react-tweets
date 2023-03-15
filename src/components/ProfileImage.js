function ProfileImage ({ image }) {
  return (
    <img src={image} className="profile" alt="profile"/>
  )
};

ProfileImage.defaultProps = {
  image: ""
};

export default ProfileImage