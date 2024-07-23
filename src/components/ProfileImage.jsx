
function ProfileImage(tweet) {
    const {image} = tweet
    return(
        <img src={image} className="profile" alt="profile" />
    )
}

export default ProfileImage;