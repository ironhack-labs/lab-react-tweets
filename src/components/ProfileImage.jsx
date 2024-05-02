// This component receives an 'image' prop and uses it for the src attribute


function ProfileImage({ image }) {
  return <img src={image} className="profile" alt="profile" />;
}

export default ProfileImage;
