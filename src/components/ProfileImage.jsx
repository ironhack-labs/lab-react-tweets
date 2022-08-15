

function ProfileImage (props) {
    const imageUrl = props.image
    return (
        <img
        src={imageUrl}
        className="profile"
        alt="profile"
      />
    )
}

export default ProfileImage