const ProfileImage = (prop) => {
    return (
        <img
            src={prop.image}
            className="profile"
            alt="profile"
        />
    )
}

export default ProfileImage