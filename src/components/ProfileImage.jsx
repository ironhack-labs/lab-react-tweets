const ProfileImage = ({tweetLevel2}) => {
  return (
        <img
        src= {tweetLevel2.user.image}
        className="profile"
        alt="profile"
      />
  )
}

export default ProfileImage