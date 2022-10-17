function ProfileImage(props) {
    return (
        <img
        src={props.imageURL}
        className="profile"
        alt="profile"
        />
    )
}

export default ProfileImage;