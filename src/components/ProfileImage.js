function ProfileImage({image}) {
    console.log(image)
    return (
        <img 
            src={ image }
            className="profile" 
            alt="profile"
        />
    );
}

export default ProfileImage;