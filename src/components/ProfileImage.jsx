const ProfileImage = ({ tweet, image, user }) => {
  return (
    <div>
      <img src={image} className="profile" alt="profile" />
    </div>
  )
}

export default ProfileImage
