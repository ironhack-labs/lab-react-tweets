function ProfileImage(props) {
  return <img 
    src = {props.image} 
    className = "profile"
    alt = "profile" />

}

ProfileImage.defaultProps = {
  image: ''
}

export default ProfileImage;