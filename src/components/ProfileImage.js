function ProfileImage(props) {
    const { image } = props
    return (
      <img className="profile" src={image} alt="profile" />
    )
}

export default ProfileImage;