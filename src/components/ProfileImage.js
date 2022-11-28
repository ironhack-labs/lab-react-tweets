function ProfileImage(props) {
    const image = props.image;
    return (
        <img
        src={image}
        className="profile"
        alt="profile"
      />
    )
}

export default ProfileImage;