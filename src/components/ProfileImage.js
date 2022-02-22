function ProfileImage(probs) {
    return (
        <img
        src={probs.image}
        className="profile"
        alt="profile"
        />
    );
}

export default ProfileImage;