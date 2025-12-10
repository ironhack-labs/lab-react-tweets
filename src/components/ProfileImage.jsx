function ProfileImage(props) {
    console.log('this is the profile image props: ', props)
  return (
    <img
        src={props.image}
        className="profile"
        alt="profile"
      />
  )
}

export default ProfileImage