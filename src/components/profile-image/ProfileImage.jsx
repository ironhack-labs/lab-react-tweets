import "./profile-image.css";
function ProfileImage({ image }) {
    return (
        <>
            <img
                src={image}
                className="profile"
                alt="profile"
            />
        </>
    );
}

export default ProfileImage;