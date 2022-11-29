// create a function for image
function ProfileImage(props) {
    const { profileImage } = props;

    return (
        <img src={profileImage} className="profile" alt="profile"/>    
    )
}

export default ProfileImage;