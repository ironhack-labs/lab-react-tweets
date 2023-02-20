function ProfileImage(props) {
    return (
      <div className="ProfileImage">
        <img
        src={props.image}
        className="profile"
        alt="profile"
      />
      </div>
    )
  }
  
  export default ProfileImage;