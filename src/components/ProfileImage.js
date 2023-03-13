function ProfileImage ({ image }) {
  return (
    <img src="IMAGE_URL" className="profile" alt="profile"/>
  )
};

ProfileImage.defaultProps = {
  image: ""
};

export default ProfileImage