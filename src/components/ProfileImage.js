function ProfileImage({ image }) {
  return (
    <div>
      <img src= {image} className="profile" alt="profile" />
    </div>
  );
}


ProfileImage.defaultProps = {
  image: ''
}

export default ProfileImage;