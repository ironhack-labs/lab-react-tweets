
const ProfileImage = (link) => {
  return (
    <div>
      <img
        src={link.image}
        className="profile"
        alt="profile"
      />
    </div>
  )
}


export default ProfileImage