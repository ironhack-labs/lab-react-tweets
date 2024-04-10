import ('./profileImage.css')

function ProfileImage({ image }) {
  return (
    <img className="profile" alt="profile" src={image} />
  )
}

export default ProfileImage