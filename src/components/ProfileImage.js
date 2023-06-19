function ProfileImage(props){
    return(
        <img src={props.userData.user.image} className="profile" alt="profile"/>
    );
}

export default ProfileImage;