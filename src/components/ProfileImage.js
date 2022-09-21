function ProfileImage(image){
    return(
        <div>
            <img src={image.src} className="profile" alt="profile"/>
        </div>
    )
}
export default ProfileImage;