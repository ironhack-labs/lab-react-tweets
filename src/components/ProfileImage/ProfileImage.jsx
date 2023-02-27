
const ProfileImage = ({ image, name }) => {
    return (
        <img
            src={image}
            className="profile"
            alt={name}
        />
    );
}

export default ProfileImage;
