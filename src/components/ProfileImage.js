function ProfileImage (props) {
	console.log ("tweet: ", props)
	return (
		<img
        src={props.image}
        className="profile"
        alt="profile"
      />
	)
}

export default ProfileImage;