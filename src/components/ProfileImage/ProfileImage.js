
import './ProfileImage.css'

function ProfileImage({image}) {
  return (
      <img
        src={image}
        className="profile"
        alt="profile"
      />
  );
}

ProfileImage.defaultProps ={
  image:"https://i.imgur.com/9yw1Fyw.jpg",
  }

export default ProfileImage;

