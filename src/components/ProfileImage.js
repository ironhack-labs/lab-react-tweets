const ProfileImage = (tweets) => {
    return (
      <div>
        <img
          src={tweets.image}
          className="profile"
          alt="profile"
        />
      </div>
    )
  }
  
  
  export default ProfileImage 