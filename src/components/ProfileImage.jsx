function ProfileImage(props){
    const {profileImage} = props;
    return(
        <div>
            <img src={profileImage} className="profile" alt="profile" />
        </div>
    )
}

export default ProfileImage;