const ProfileImage = ({ name, image, handle }) => {

    return (
        <img
            src={image}
            className="profile"
            alt={name}
        />
    )
}

export default ProfileImage